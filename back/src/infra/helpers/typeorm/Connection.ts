import {
  DataSource,
  DataSourceOptions,
  ObjectType,
  QueryRunner,
  Repository,
} from "typeorm";

import { ConnectionNotFound, TransactionNotFound } from "@/infra/errors";

import { Connection, Transaction } from "@/infra/contracts";

export class TypeORMConnection implements Connection, Transaction {
  private dataSource?: DataSource;

  private query?: QueryRunner;

  public constructor(private dataSourceOptions: DataSourceOptions) {}

  public async checkConnectionStatus(): Promise<boolean> {
    return this.dataSource?.isInitialized || false;
  }

  public async connect(): Promise<void> {
    if (this.dataSource === undefined) {
      this.dataSource = new DataSource(this.dataSourceOptions);
    }

    if (!(await this.checkConnectionStatus())) {
      await this.dataSource.initialize();
    }
  }

  public async disconnect(): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFound();
    await this.dataSource.destroy();
    this.query = undefined;
    this.dataSource = undefined;
  }

  public getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity> {
    if (this.dataSource === undefined) throw new ConnectionNotFound();

    if (this.query !== undefined)
      return this.query.manager.getRepository(entity);

    return this.dataSource.getRepository(entity);
  }

  public async openTransaction(): Promise<void> {
    if (this.dataSource === undefined) throw new ConnectionNotFound();
    this.query = this.dataSource.createQueryRunner();
    await this.query.startTransaction();
  }

  public async closeTransaction(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFound();
    await this.query.release();
  }

  public async commitTransaction(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFound();
    await this.query.commitTransaction();
  }

  public async rollbackTransaction(): Promise<void> {
    if (this.query === undefined) throw new TransactionNotFound();
    await this.query.rollbackTransaction();
  }

  // Workaround for a typeorm migration utility limitation.
  public getDataSource(): DataSource {
    if (this.dataSource === undefined) throw new ConnectionNotFound();
    return this.dataSource;
  }
}

import { ObjectType, Repository } from "typeorm";

import { Repository as BaseRepository } from "@/infra/contracts";

import { TypeORMConnection } from "./Connection";

export abstract class TypeORMRepository implements BaseRepository {
  constructor(private readonly connection: TypeORMConnection) {}

  getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity> {
    return this.connection.getRepository(entity);
  }

  getDataSource() {
    return this.connection.getDataSource();
  }
}

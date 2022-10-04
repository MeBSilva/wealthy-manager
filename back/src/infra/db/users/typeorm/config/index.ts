import "dotenv/config";
import { DataSourceOptions } from "typeorm";

const dev: DataSourceOptions = {
  type: "postgres",
  url: encodeURI(process.env.DB_URL ?? ""),
  logging: ["query"],
  logger: "simple-console",
  entities: [`${__dirname}/../entities/*.ts`],
  migrations: [`${__dirname}/../migrations/*.ts`],
};

const prod: DataSourceOptions = {
  type: "postgres",
  url: encodeURI(process.env.DB_URL ?? ""),
  entities: [`${__dirname}/../entities/*.ts`],
  migrations: [`${__dirname}/../migrations/*.ts`],
};

export const TypeORMConfig = {
  dev,
  prod,
};

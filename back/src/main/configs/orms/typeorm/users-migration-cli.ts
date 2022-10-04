// This is a workaround for a typeorm cli limitation.
// this file is only for cli migration utils, and should not be used in this project

import { DataSource } from "typeorm";

import { TypeORMConfig } from "@/infra/db/users/typeorm";

import { server } from "@/main/envs";

export default new DataSource(
  server.environment === "production" ? TypeORMConfig.prod : TypeORMConfig.dev
);

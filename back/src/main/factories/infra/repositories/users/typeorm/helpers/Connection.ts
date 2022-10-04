import { TypeORMConfig } from "@/infra/db/users/typeorm";
import { TypeORMConnection } from "@/infra/helpers/typeorm";

import { server } from "@/main/envs";

class UsersConnectionSingleton {
  private static instance?: TypeORMConnection;

  private constructor() {}

  public static getInstance() {
    if (!UsersConnectionSingleton.instance) {
      UsersConnectionSingleton.instance = new TypeORMConnection(
        server.environment === "production"
          ? TypeORMConfig.prod
          : TypeORMConfig.dev
      );
    }

    return UsersConnectionSingleton.instance;
  }
}

export const makeUsersConnection = (): TypeORMConnection =>
  UsersConnectionSingleton.getInstance();

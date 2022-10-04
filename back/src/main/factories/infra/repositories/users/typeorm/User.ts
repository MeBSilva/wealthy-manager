import { UserRepository } from "@/infra/db/users/typeorm/repositories";

import { makeUsersConnection } from "./helpers";

export const makeUserRepository = (): UserRepository =>
  new UserRepository(makeUsersConnection());

import { DbLoadUser } from "@/data/usecases/db";

import { GetUser } from "@/domain/usecases";

import { makeUserRepository } from "@/main/factories/infra/repositories/users/typeorm";

export const makeGetUser = (): GetUser => {
  const userRepository = makeUserRepository();

  return new DbLoadUser(userRepository);
};

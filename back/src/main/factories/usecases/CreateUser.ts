import { DbAddUser } from "@/data/usecases/db";

import { CreateUser } from "@/domain/usecases";

import { makeUserRepository } from "@/main/factories/infra/repositories/users/typeorm";
import { makeBcryptAdapter } from "@/main/factories/infra/adapters";

export const makeCreateUser = (): CreateUser => {
  const userRepository = makeUserRepository();

  return new DbAddUser(userRepository, userRepository, makeBcryptAdapter());
};

import { DbUpdateUser } from "@/data/usecases/db";

import { UpdateUser } from "@/domain/usecases";

import { makeUserRepository } from "@/main/factories/infra/repositories/users/typeorm";

export const makeUpdateUser = (): UpdateUser => {
  const userRepository = makeUserRepository();

  return new DbUpdateUser(userRepository, userRepository);
};

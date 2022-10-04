import { DbDeleteUser } from "@/data/usecases/db";

import { DeleteUser } from "@/domain/usecases";

import { makeUserRepository } from "@/main/factories/infra/repositories/users/typeorm";

export const makeDeleteUser = (): DeleteUser => {
  const userRepository = makeUserRepository();

  return new DbDeleteUser(userRepository, userRepository);
};

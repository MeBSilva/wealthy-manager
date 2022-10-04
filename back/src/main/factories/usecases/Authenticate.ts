import { DbAuthenticate } from "@/data/usecases/db";

import { Authenticate } from "@/domain/usecases";

import { makeUserRepository } from "@/main/factories/infra/repositories/users/typeorm";
import {
  makeBcryptAdapter,
  makeJwtAdapter,
} from "@/main/factories/infra/adapters";

export const makeAuthenticate = (): Authenticate =>
  new DbAuthenticate(
    makeBcryptAdapter(),
    makeJwtAdapter(),
    makeUserRepository()
  );

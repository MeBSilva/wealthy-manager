import { CreateUser } from "@/domain/usecases";

export type CreateUserRepository = {
  create: (
    data: CreateUserRepository.Params
  ) => Promise<CreateUserRepository.Result>;
};

export namespace CreateUserRepository {
  export type Params = CreateUser.Params;
  export type Result = CreateUser.Result;
}

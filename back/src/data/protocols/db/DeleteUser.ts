import { DeleteUser } from "@/domain/usecases";

export type DeleteUserRepository = {
  delete: (
    data: DeleteUserRepository.Params
  ) => Promise<DeleteUserRepository.Result>;
};

export namespace DeleteUserRepository {
  export type Params = DeleteUser.Params;
  export type Result = DeleteUser.Result;
}

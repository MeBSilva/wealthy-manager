import { GetUser } from "@/domain/usecases";

export type LoadUserRepository = {
  load: (data: LoadUserRepository.Params) => Promise<LoadUserRepository.Result>;
};

export namespace LoadUserRepository {
  export type Params = GetUser.Params;
  export type Result = GetUser.Result | null;
}

import { User } from "@/domain/models";

export type LoadUserAuthInfoRepository = {
  loadInfo: (
    data: LoadUserAuthInfoRepository.Params
  ) => Promise<LoadUserAuthInfoRepository.Result>;
};

export namespace LoadUserAuthInfoRepository {
  export type Params = Pick<User, "email">;
  export type Result = Pick<User, "id" | "email" | "password" | "name">;
}

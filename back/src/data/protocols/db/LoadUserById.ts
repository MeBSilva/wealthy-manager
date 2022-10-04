import { User } from "@/domain/models";
import { GetUser } from "@/domain/usecases";

export type LoadUserByIdRepository = {
  loadById: (
    data: LoadUserByIdRepository.Params
  ) => Promise<LoadUserByIdRepository.Result>;
};

export namespace LoadUserByIdRepository {
  export type Params = { id: User["id"] };
  export type Result = GetUser.Result | null;
}

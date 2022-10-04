import { User } from "../models";

export type CreateUser = {
  create: (params: CreateUser.Params) => Promise<CreateUser.Result>;
};

export namespace CreateUser {
  export type Params = Omit<User, "id" | "properties">;
  export type Result = Omit<User, "password">;
}

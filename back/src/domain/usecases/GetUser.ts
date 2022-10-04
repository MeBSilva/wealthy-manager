import { User } from "../models";

export type GetUser = {
  get: (params: GetUser.Params) => Promise<GetUser.Result>;
};

export namespace GetUser {
  export type Params = Pick<User, "email">;
  export type Result = Omit<User, "password">;
}

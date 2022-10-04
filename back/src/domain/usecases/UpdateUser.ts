import { User } from "../models";

export type UpdateUser = {
  update: (params: UpdateUser.Params) => Promise<UpdateUser.Result>;
};

export namespace UpdateUser {
  export type Params = Pick<User, "email">;
  export type Result = Omit<User, "password">;
}

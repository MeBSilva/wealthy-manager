import { User } from "../models";

export type UpdateUser = {
  update: (params: UpdateUser.Params) => Promise<UpdateUser.Result>;
};

export namespace UpdateUser {
  export type Params = Partial<User> & { id: User["id"] };
  export type Result = Omit<User, "password">;
}

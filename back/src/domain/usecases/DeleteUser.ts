import { User } from "../models";

export type DeleteUser = {
  delete: (params: DeleteUser.Params) => Promise<DeleteUser.Result>;
};

export namespace DeleteUser {
  export type Params = Pick<User, "email">;
  export type Result = boolean;
}

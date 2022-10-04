import { User } from "../models";

export type Authenticate = {
  auth: (data: Authenticate.Params) => Promise<Authenticate.Result>;
};

export namespace Authenticate {
  export type Params = Pick<User, "email" | "password">;
  export type Result = { token: string; name: User["name"] };
}

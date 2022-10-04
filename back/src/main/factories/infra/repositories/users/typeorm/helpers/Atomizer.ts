import { TypeORMAtomizer } from "@/infra/helpers/typeorm";

import { makeUsersConnection } from "./Connection";

export const makeUsersAtomizer = () =>
  new TypeORMAtomizer(makeUsersConnection());

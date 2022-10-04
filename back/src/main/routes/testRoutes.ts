import { Router } from "express";

import { adaptRoute } from "@/main/adapters/express";
import { makeCreateUserController } from "@/main/factories/controllers";

export default (router: Router): void => {
  router.post("/user/create", adaptRoute(makeCreateUserController()));
};

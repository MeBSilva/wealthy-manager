import { Router } from "express";

import { adaptRoute } from "@/main/adapters/express";
import {
  makeCreateUserController,
  makeGetUserController,
  makeUpdateUserController,
  makeDeleteUserController,
} from "@/main/factories/controllers";

export default (router: Router): void => {
  router.post("/user/create", adaptRoute(makeCreateUserController()));

  router.get("/user/:email", adaptRoute(makeGetUserController()));

  router.put("/user/:id", adaptRoute(makeUpdateUserController()));

  router.delete("/user/:id", adaptRoute(makeDeleteUserController()));
};

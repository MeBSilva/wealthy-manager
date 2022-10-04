import { BcryptAdapter } from "@/infra/cryptography";

import { auth } from "@/main/envs";

export const makeBcryptAdapter = (): BcryptAdapter =>
  new BcryptAdapter(parseInt(auth.salt, 10));

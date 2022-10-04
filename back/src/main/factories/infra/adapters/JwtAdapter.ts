import { JwtAdapter } from "@/infra/cryptography";

import { auth } from "@/main/envs";

export const makeJwtAdapter = (): JwtAdapter => {
  if (!auth.secret)
    throw new Error("Server environment variable 'secret' is not set.");

  return new JwtAdapter(auth.secret);
};

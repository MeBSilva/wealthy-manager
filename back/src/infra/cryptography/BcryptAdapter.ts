import bcrypt from "bcrypt";

import { Hasher, HashComparer } from "@/data/protocols/cryptography";

export class BcryptAdapter implements Hasher, HashComparer {
  constructor(private readonly salt: number) {}

  public async hash(plainText: string): Promise<string> {
    return bcrypt.hash(plainText, this.salt);
  }

  public async compare(plainText: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plainText, digest);
  }
}

import jwt from "jsonwebtoken";

import { Encrypter, Decrypter } from "@/data/protocols/cryptography";

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(private readonly secret: string) {}

  public async encrypt(plainText: string): Promise<string> {
    return jwt.sign({ id: plainText }, this.secret);
  }

  public async decrypt(cipherText: string): Promise<string> {
    return JSON.stringify(jwt.verify(cipherText, this.secret));
  }
}

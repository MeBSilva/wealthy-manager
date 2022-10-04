import { Encrypter, HashComparer } from "@/data/protocols/cryptography";
import { LoadUserAuthInfoRepository } from "@/data/protocols/db";

import { UserNotFoundError } from "@/domain/errors";
import { Authenticate } from "@/domain/usecases";

export class DbAuthenticate implements Authenticate {
  constructor(
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly loadUserAuthInfoRepository: LoadUserAuthInfoRepository
  ) {}

  async auth(data: Authenticate.Params): Promise<Authenticate.Result> {
    const userExists = await this.loadUserAuthInfoRepository.loadInfo({
      email: data.email,
    });

    if (!userExists) throw new UserNotFoundError();

    const isPasswordValid = await this.hashComparer.compare(
      data.password,
      userExists.password
    );

    if (!isPasswordValid) throw new Error();

    const token = await this.encrypter.encrypt(userExists.id);

    return {
      token,
      name: userExists.name,
      authorizationLevel: userExists.authorizationLevel,
    };
  }
}

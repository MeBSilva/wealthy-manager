import { Hasher } from "@/data/protocols/cryptography";
import { CreateUserRepository, LoadUserRepository } from "@/data/protocols/db";

import { EmailInUseError } from "@/domain/errors";
import { CreateUser } from "@/domain/usecases";

export class DbAddUser implements CreateUser {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly loadUserRepository: LoadUserRepository,
    private readonly hasher: Hasher
  ) {}

  async create(data: CreateUser.Params): Promise<CreateUser.Result> {
    const userExists = await this.loadUserRepository.load({
      email: data.email,
    });

    if (userExists) throw new EmailInUseError();

    const result = await this.createUserRepository.create({
      ...data,
      password: await this.hasher.hash(data.password),
    });

    return result;
  }
}

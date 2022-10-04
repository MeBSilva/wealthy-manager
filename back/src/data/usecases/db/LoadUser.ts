import { LoadUserRepository } from "@/data/protocols/db";

import { UserNotFoundError } from "@/domain/errors";
import { GetUser } from "@/domain/usecases";

export class DbLoadUser implements GetUser {
  constructor(private readonly loadUserRepository: LoadUserRepository) {}

  async get(data: GetUser.Params): Promise<GetUser.Result> {
    const result = await this.loadUserRepository.load(data);

    if (!result) throw new UserNotFoundError();

    return result;
  }
}

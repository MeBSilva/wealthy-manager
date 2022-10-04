import { UpdateUserRepository, LoadUserRepository } from "@/data/protocols/db";

import { UserNotFoundError } from "@/domain/errors";
import { UpdateUser } from "@/domain/usecases";

export class DbUpdateUser implements UpdateUser {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly loadUserRepository: LoadUserRepository
  ) {}

  async update(data: UpdateUser.Params): Promise<UpdateUser.Result> {
    const userExists = await this.loadUserRepository.load({
      email: data.email,
    });

    if (!userExists) throw new UserNotFoundError();

    const result = await this.updateUserRepository.update(data);

    return result;
  }
}

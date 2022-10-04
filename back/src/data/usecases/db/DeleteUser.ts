import { DeleteUserRepository, LoadUserRepository } from "@/data/protocols/db";

import { UserNotFoundError } from "@/domain/errors";
import { DeleteUser } from "@/domain/usecases";

export class DbDeleteUser implements DeleteUser {
  constructor(
    private readonly deleteUserRepository: DeleteUserRepository,
    private readonly loadUserRepository: LoadUserRepository
  ) {}

  async delete(data: DeleteUser.Params): Promise<DeleteUser.Result> {
    const userExists = await this.loadUserRepository.load({
      email: data.email,
    });

    if (!userExists) throw new UserNotFoundError();

    const result = await this.deleteUserRepository.delete(data);

    return result;
  }
}

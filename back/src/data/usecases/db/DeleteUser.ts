import {
  DeleteUserRepository,
  LoadUserByIdRepository,
} from "@/data/protocols/db";

import { UserNotFoundError } from "@/domain/errors";
import { DeleteUser } from "@/domain/usecases";

export class DbDeleteUser implements DeleteUser {
  constructor(
    private readonly deleteUserRepository: DeleteUserRepository,
    private readonly loadUserRepository: LoadUserByIdRepository
  ) {}

  async delete(data: DeleteUser.Params): Promise<DeleteUser.Result> {
    const userExists = await this.loadUserRepository.loadById({
      id: data.id,
    });

    if (!userExists) throw new UserNotFoundError();

    const result = await this.deleteUserRepository.delete(data);

    return result;
  }
}

import {
  UpdateUserRepository,
  LoadUserByIdRepository,
} from "@/data/protocols/db";

import { UserNotFoundError } from "@/domain/errors";
import { UpdateUser } from "@/domain/usecases";

export class DbUpdateUser implements UpdateUser {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly loadUserRepository: LoadUserByIdRepository
  ) {}

  async update(data: UpdateUser.Params): Promise<UpdateUser.Result> {
    const userExists = await this.loadUserRepository.loadById({
      id: data.id,
    });

    if (!userExists) throw new UserNotFoundError();

    const result = await this.updateUserRepository.update(data);

    return result;
  }
}

import {
  CreateUserRepository,
  DeleteUserRepository,
  LoadUserAuthInfoRepository,
  LoadUserByIdRepository,
  LoadUserRepository,
  UpdateUserRepository,
} from "@/data/protocols/db";

import { TypeORMRepository } from "@/infra/helpers/typeorm";

import { User } from "../entities";

export class UserRepository
  extends TypeORMRepository
  implements
    CreateUserRepository,
    DeleteUserRepository,
    LoadUserAuthInfoRepository,
    LoadUserRepository,
    LoadUserByIdRepository,
    UpdateUserRepository
{
  public async create(
    data: CreateUserRepository.Params
  ): Promise<CreateUserRepository.Result> {
    const repository = this.getRepository(User);

    await repository.insert(data);

    const result = await repository.findOne({ where: { email: data.email } });

    if (!result) throw new Error("Failed to create user");

    return result;
  }

  public async delete(
    data: DeleteUserRepository.Params
  ): Promise<DeleteUserRepository.Result> {
    const repository = this.getRepository(User);

    await repository.delete({
      id: data.id,
    });

    return true;
  }

  public async loadInfo(
    data: LoadUserAuthInfoRepository.Params
  ): Promise<LoadUserAuthInfoRepository.Result> {
    const repository = this.getRepository(User);

    const result = await repository.findOne({
      where: { email: data.email },
    });

    return result;
  }

  public async loadById(
    data: LoadUserByIdRepository.Params
  ): Promise<LoadUserByIdRepository.Result> {
    const repository = this.getRepository(User);

    const result = await repository.findOne({
      where: { id: data.id },
    });

    return result;
  }

  public async load(
    data: LoadUserRepository.Params
  ): Promise<LoadUserRepository.Result> {
    const repository = this.getRepository(User);

    const result = await repository.findOne({
      where: { email: data.email },
    });

    return result;
  }

  public async update(
    data: UpdateUserRepository.Params
  ): Promise<UpdateUserRepository.Result> {
    const repository = this.getRepository(User);

    if (data.email)
      await repository.update(
        { id: data.id },
        {
          email: data.email,
          name: data.name,
        }
      );

    const result = await repository.findOne({ where: { id: data.id } });

    if (!result) return {} as UpdateUserRepository.Result;

    return result;
  }
}

export {};
// import {
//   CreateUserRepository,
//   DeleteUserRepository,
//   LoadUserAuthInfoRepository,
//   LoadUserRepository,
//   UpdateUserRepository,
// } from "@/data/protocols/db";

// import { TypeORMRepository } from "@/infra/helpers/typeorm";

// import { Property } from "../entities";

// export class PropertyRepository
//   extends TypeORMRepository
//   implements
//     CreateUserRepository,
//     DeleteUserRepository,
//     LoadUserAuthInfoRepository,
//     LoadUserRepository,
//     UpdateUserRepository
// {
//   public async create(
//     data: CreateUserRepository.Params
//   ): Promise<CreateUserRepository.Result> {
//     const repository = this.getRepository(User);

//     await repository.insert(data);

//     const result = await repository.findOne({ where: { email: data.email } });

//     if (!result) return {} as CreateUserRepository.Result;

//     return result;
//   }

//   public async delete(
//     data: DeleteUserRepository.Params
//   ): Promise<DeleteUserRepository.Result> {
//     const repository = this.getRepository(User);

//     await repository.delete({
//       email: data.email,
//     });

//     return true;
//   }

//   public async loadInfo(
//     data: LoadUserAuthInfoRepository.Params
//   ): Promise<LoadUserAuthInfoRepository.Result> {
//     const repository = this.getRepository(User);

//     const result = await repository.findOne({
//       where: { email: data.email },
//     });

//     if (!result) return {} as LoadUserAuthInfoRepository.Result;

//     return result;
//   }

//   public async load(
//     data: LoadUserRepository.Params
//   ): Promise<LoadUserRepository.Result> {
//     const repository = this.getRepository(User);

//     const result = await repository.findOne({
//       where: { email: data.email },
//     });

//     if (!result) return {} as LoadUserRepository.Result;

//     return result;
//   }

//   public async update(
//     data: UpdateUserRepository.Params
//   ): Promise<UpdateUserRepository.Result> {
//     const repository = this.getRepository(User);

//     await repository.update({ email: data.email }, data);

//     const result = await repository.findOne({ where: { email: data.email } });

//     if (!result) return {} as UpdateUserRepository.Result;

//     return result;
//   }
// }

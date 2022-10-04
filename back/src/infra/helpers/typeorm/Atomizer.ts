import { Atomizer } from "@/data/protocols/consistency";

import { TypeORMConnection } from "./Connection";

export class TypeORMAtomizer implements Atomizer {
  constructor(private readonly connection: TypeORMConnection) {}

  public runAtomically<F extends (...args: any[]) => Promise<any>>(
    workFunctions: F[]
  ) {
    return async () => {
      try {
        await this.connection.openTransaction();

        const results = await Promise.all(workFunctions.map((fun, _) => fun()));

        await this.connection.commitTransaction();

        return results;
      } catch (err) {
        await this.connection.rollbackTransaction();

        throw err;
      }
    };
  }
}

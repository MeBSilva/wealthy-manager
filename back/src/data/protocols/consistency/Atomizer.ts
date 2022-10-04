export type Atomizer = {
  runAtomically<F extends (...args: any[]) => Promise<any>>(
    workFunctions: F[]
  ): () => Promise<Awaited<F>[]>;
};

export interface Transaction {
  openTransaction: () => Promise<void>;
  closeTransaction: () => Promise<void>;
  commitTransaction: () => Promise<void>;
  rollbackTransaction: () => Promise<void>;
}

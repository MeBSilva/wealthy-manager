export class TransactionNotFound extends Error {
  constructor() {
    super("No transaction was found");
    this.name = "TransactionNotFoundError";
  }
}

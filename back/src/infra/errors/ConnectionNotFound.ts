export class ConnectionNotFound extends Error {
  constructor() {
    super("No connection was found");
    this.name = "ConnectionNotFoundError";
  }
}

export class NotFoundError extends Error {
  constructor(resource: string) {
    super(`The resource ${resource} was not found.`);
    this.name = "NotFoundError";
  }
}

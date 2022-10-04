export class ExternalServiceError extends Error {
  constructor(public readonly body: any) {
    super("The service returned an error response");
    this.name = "ExternalServiceError";
  }
}

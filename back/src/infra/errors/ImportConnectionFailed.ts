export class ImportConnectionFailed extends Error {
  constructor() {
    super("Failed to import connections");
    this.name = "ImportConnectionFailed";
  }
}

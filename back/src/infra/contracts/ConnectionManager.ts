export interface ConnectionManager {
  initializeConnection(): Promise<void>;

  testConnection(): Promise<boolean>;
}

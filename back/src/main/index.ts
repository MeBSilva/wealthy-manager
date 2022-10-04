import "dotenv/config";
import "reflect-metadata";
import { join } from "path";

import { server } from "@/main/envs";
import { ServerInstance } from "@/main/configs/types";
import { initializeORMConnections } from "@/main/configs/orms";

const serverConfigPath = join(__dirname, "./configs");

const serverInstancePath = join(serverConfigPath, server.framework);

(async () => {
  const serverInstance = (await import(serverInstancePath)) as ServerInstance;

  await serverInstance.startServer(server.port);

  await initializeORMConnections();
})();

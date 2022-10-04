import { ServerInstance } from "@/main/configs/types";

import { setupApp } from "./app";

export const startServer: ServerInstance.StartServer = async (port: string) => {
  const app = await setupApp();

  return new Promise((resolve, _) => {
    app.listen(port, () => {
      console.log(`Server running at port ${port}`);
      resolve();
    });
  });
};

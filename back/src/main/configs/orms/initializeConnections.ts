import { server } from "@/main/envs";
import { makeUsersConnection } from "@/main/factories/infra/repositories/users/typeorm";

export const initializeORMConnections = async () => {
  try {
    await makeUsersConnection().connect();

    console.log("Database connections have been estabilished.");
  } catch (err) {
    if (server.environment !== "production") console.log(err);
    console.log("Error connecting to database.");
  }
};

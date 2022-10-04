export const server = {
  environment:
    process.env.NODE_ENV === "production" ? "production" : "development",
  framework: process.env.SERVER_FRAMEWORK ?? "express",
  port: process.env.PORT ?? "3333",
};

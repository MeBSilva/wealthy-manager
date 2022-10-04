export const auth = {
  salt: process.env.SALT ?? "12",
  secret: process.env.JWTSECRET,
};

import { Property } from "./Property";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  authorizationLevel: "admin" | "user";
  properties: Property[];
};

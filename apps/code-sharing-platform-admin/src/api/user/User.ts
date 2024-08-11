import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  profileVisibility?: "Option1" | null;
  profiles?: Array<Profile>;
  roles: JsonValue;
  surname: string | null;
  updatedAt: Date;
  username: string;
};

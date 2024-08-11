import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password: string;
  profileVisibility?: "Option1" | null;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  surname?: string | null;
  username: string;
};

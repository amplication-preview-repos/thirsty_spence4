import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  profileVisibility?: "Option1" | null;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  surname?: string | null;
  username?: string;
};

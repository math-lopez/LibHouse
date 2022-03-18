import { IClaims } from "./claims";
import { IUserData } from "./user-login"

export interface IAuthLogin{
  user: IUserData;
  accessToken: string;
  claims: Array<IClaims>;
}

import {Role} from "./role.model";

export class User {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public password: string;
  public roles = new Array<Role>();

}

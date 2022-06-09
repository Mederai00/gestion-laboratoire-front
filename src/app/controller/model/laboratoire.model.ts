import {User} from "./user.model";
import {Budget} from "./budget.model";

export class Laboratoire {
  public id: number;
  public nom: string;
  public adresse: string;
  public responsable = new User();
  public membres = new Array<User>();
  public budgets = new Array<Budget>();
  public telephone: string;
  public ville: string;
  public domaine: string;
}

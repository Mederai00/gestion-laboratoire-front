export interface Laboratoire {
  id: number;
  nom: string;
  adresse: string;
  responsable: User;
  membres: User[];
  budgets: Budget[];
}

export interface Budget {
  id: number;
  annee: number;
  db: number;
  dr: number;
}

export interface User {
  id: number;
  name: string;
  username: string;
  budgetPersonnels: BudgetPersonnel[];
  email: string;
  password: string;
  roles: Role[];
}

export interface BudgetPersonnel {
  id: number;
  budget: Budget;
  somme: number;
  user: User;
}

export interface StorageUser {
  id: number;
  username: string;
  email: string;
  roles: string[];
}

export interface Role {
  id: number;
  name: ERole;
}

export enum ERole {
  RoleUser = 'ROLE_USER',
  RoleModerator = 'ROLE_MODERATOR',
  RoleAdmin = 'ROLE_ADMIN',
}

export interface Laboratoire {
  nom: string;
  _links: Links;
}

export interface Links {
  self: Budgets;
  laboratoire: Budgets;
  responsable: Budgets;
  budgets: Budgets;
  membres: Budgets;
}

export interface Budgets {
  href: string;
}

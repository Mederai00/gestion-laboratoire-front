import { Pipe, PipeTransform } from '@angular/core';
import { BudgetPersonnel } from '../models/laboratoire.model';

@Pipe({
  name: 'bpAnnee',
})
export class BpParAnnee implements PipeTransform {
  transform(budgetPersonnels: BudgetPersonnel[], ...args: number[]) {
    let [arg] = args;

    return budgetPersonnels.find((bp) => {
      if (bp.budget) {
        return bp.budget.annee == arg;
      }
      return false;
    })?.somme;
  }
}

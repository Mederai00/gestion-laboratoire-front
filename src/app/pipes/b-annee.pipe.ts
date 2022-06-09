import { Pipe, PipeTransform } from '@angular/core';
import { Budget } from '../models/laboratoire.model';

@Pipe({
  name: 'bAnnee',
})
export class BParAnnee implements PipeTransform {
  transform(budget: Budget[], ...args: number[]) {
    let [annee, dotation] = args;
    if (dotation == 1) {
      return budget.find((b) => {
        return b.annee == annee;
      })?.db;
    } else {
      return budget.find((b) => {
        return b.annee == annee;
      })?.dr;
    }
  }
}

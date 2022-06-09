import { Component, OnInit } from '@angular/core';
import {
  Budget,
  BudgetPersonnel,
  Laboratoire,
  User,
} from '../models/laboratoire.model';

import { UserService } from '../_services/user.service';
import { ConfirmationService, Message } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-board-responsable',
  templateUrl: './board-responsable.component.html',
  styleUrls: ['./board-responsable.component.css'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [MessageService, ConfirmationService],
})
export class BoardResponsableComponent implements OnInit {
  laboratoire: Laboratoire;
  responsableId: number;

  userDialog: boolean;

  submitted: boolean;

  users: User[];

  user: User;

  userBP: number = 0;

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  annees: number[] = [];

  selectedAnnee: number = 2022;
  resteRecherche: number;

  msgs: Message[];

  onChange(event: any) {
    this.selectedAnnee = event.target.value;
    this.resteRecherche = this.resteRechercheLaboratoire(
      this.laboratoire.budgets,
      this.users,
      this.selectedAnnee
    );
  }
  resteRechercheLaboratoire(budgets: Budget[], users: User[], annee: number) {
    let budget: Budget = budgets.find((b) => {
      return b.annee == annee;
    })!;
    let sommeAnnee = budget.dr;
    let allBudgetsPersonnels: BudgetPersonnel[] = [];

    users.forEach((u) => {
      u.budgetPersonnels?.forEach((bp) => {
        allBudgetsPersonnels.push(bp);
      });
    });

    let sommeallBudgetsPersonnels: number;

    sommeallBudgetsPersonnels = allBudgetsPersonnels.reduce((total, n) => {
      if (n.budget && n.budget.annee == annee) {
        return (total += n.somme);
      } else return total;
    }, 0);

    return sommeAnnee - sommeallBudgetsPersonnels;
  }

  constructor(
    private userService: UserService,
    private storageService: StorageService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.responsableId = this.storageService.getUser().id;
    this.userService.findByResponsableId(this.responsableId).subscribe({
      next: (data) => {
        this.laboratoire = data as Laboratoire;
        this.users = this.laboratoire.membres;
        this.laboratoire.budgets.forEach((b) => {
          this.annees.push(b.annee);
        });
        this.resteRecherche = this.resteRechercheLaboratoire(
          this.laboratoire.budgets,
          this.users,
          this.selectedAnnee
        );
      },
    });
  }

  loguserBP(event: any) {
    this.userBP = event.value;
  }
  saveBudgetPersonnel() {
    this.submitted = true;

    let bp: BudgetPersonnel;

    if (
      this.user.budgetPersonnels.find(
        (o) => o.budget.annee == this.selectedAnnee
      )?.id
    ) {
      console.log('saved on existing bp');

      bp = {
        id: this.user.budgetPersonnels.find(
          (o) => o.budget.annee == this.selectedAnnee
        )?.id as number,
        budget: this.user.budgetPersonnels.find(
          (o) => o.budget.annee == this.selectedAnnee
        )?.budget as Budget,
        somme: this.userBP,
        user: this.user,
      };
    } else {
      console.log('saved from scratch');

      bp = {
        id: 0,
        budget: this.laboratoire.budgets.find(
          (o) => o.annee == this.selectedAnnee
        ) as Budget,
        somme: this.userBP,
        user: this.user,
      };
    }

    this.userService.saveBP(bp).subscribe({
      next: (data) => {
        this.users[this.findIndexById(this.user.id)] = data as User;
        this.userDialog = false;
        this.user = {} as User;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editUser(user: User) {
    this.user = { ...user };
    this.userDialog = true;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        index = i;
        break;
      }
    }
    return index;
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }
}

import { Component, OnInit } from '@angular/core';
import {Laboratoire} from "../../controller/model/laboratoire.model";
import {LaboratoireService} from "../../controller/service/laboratoire.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {MembreService} from "../../controller/service/membre.service";
import {User} from "../../controller/model/user.model";
import {Budget} from "../../controller/model/budget.model";
import {BudgetService} from "../../controller/service/budget.service";

@Component({
  selector: 'app-infos-laboratoires',
  templateUrl: 'infos-laboratoires.component.html',
  styleUrls: ['./infos-laboratoires.component.css'],
  providers: [MessageService,ConfirmationService]
})

export class InfosLaboratoiresComponent implements OnInit {

  laboDialog: boolean;
  private _laboratoires: Laboratoire[];
  laboratoire = new Laboratoire();
  budget = new Budget();
  selectedLabos: Laboratoire[];
  submitted: boolean;
  statuses: any[];
  private _usersWithoutLabo: User[];
  selectedUsers: User[];

  constructor(private laboratoireService: LaboratoireService, private membresService: MembreService, private budgetService: BudgetService, private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.selectedUsers;
    this.laboratoireService.findAll().subscribe(
      data => {
        console.log('Labos List is founded ');
        this.laboratoires = data;},
        error => console.log('Error fetching labos List !! '));

    this.membresService.findUsersWithoutLabos().subscribe(
      data =>{
        console.log('users without labos list is founded');
        this.usersWithoutLabo = data;},
      error => console.log('Error fetching users without labos list!! '));
  }

  openNew() {
    this.laboratoire = {} as Laboratoire;
    this.submitted = false;
    this.laboDialog = true;
  }

  saveLabo() {
    this.submitted = true;
    this.laboratoire.membres = [];
    this.laboratoire.membres.push(...this.selectedUsers);
    console.log('before save budget');
    console.log(this.budget)
    //this.budgetService.saveBudget(this.budget).subscribe( data => console.log(data), error => console.log('Error saving budget' + this.budget))
    console.log('before push budget');
    this.laboratoire.budgets = [];
    this.laboratoire.budgets.push(this.budget);
    console.log(this.laboratoire)
    this.laboratoireService.saveLabo(this.laboratoire).subscribe( data =>
    {
      console.log(data)
      this.laboratoires.push(data);
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Laborqtoire crée ', life: 3000});
    }, error => console.log('Error saving laboratoire' + this.laboratoire))
    this.laboratoires = [...this.laboratoires];
    this.laboDialog = false;
    this.laboratoire = {} as Laboratoire;
  }

   deleteLabo(labo: Laboratoire){
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment supprimer le laboratoire ' + labo.nom + '?',
      header: 'Confirmer',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.laboratoireService.deleteLabo(labo.id).subscribe(value => {
          console.log(value)
          this.laboratoires = this.laboratoires.filter(
            val => val.id !== labo.id
          )
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Laboratoire supprimé', life: 4100});
        })
        this.laboratoire = {} as Laboratoire;

      }
    });
  }
/*
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',ss
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }

  editProduct(product: Product) {
    this.product = {...product};
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {};
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }


  saveProduct() {
    this.submitted = true;

    if (this.product.name.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      } else {
        this.product.id = this.createId();
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

 */

  /*
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.product[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
*/

  hideDialog() {
    this.laboDialog = false;
    this.submitted = false;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  public viewLaboMembres(laboratoire: Laboratoire) {
    return this.laboratoireService.selectedLabo = {...laboratoire};
  }


  get laboratoires(): Laboratoire[] {
    return this._laboratoires;
  }

  set laboratoires(value: Laboratoire[]) {
    this._laboratoires = value;
  }

  get usersWithoutLabo(): User[] {
    return this._usersWithoutLabo;
  }

  set usersWithoutLabo(value: User[]) {
    this._usersWithoutLabo = value;
  }
}

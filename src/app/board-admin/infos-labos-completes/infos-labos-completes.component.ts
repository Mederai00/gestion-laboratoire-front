import { Component, OnInit } from '@angular/core';
import {Laboratoire} from "../../controller/model/laboratoire.model";
import {LaboratoireService} from "../../controller/service/laboratoire.service";
import {User} from "../../controller/model/user.model";
import {MembreService} from "../../controller/service/membre.service";

@Component({
  selector: 'app-infos-labos-completes',
  templateUrl: 'infos-labos-completes.component.html',
  styleUrls: ['./infos-labos-completes.component.css']
})
export class InfosLabosCompletesComponent implements OnInit {

  private _selectedLab: Laboratoire;
  private _idMembresList: Array<number>;
  private _membresList: Array<User>;

  constructor(private laboratoireService: LaboratoireService, private membreService: MembreService) { }

  ngOnInit(): void {
    this.selectedLab = this.laboratoireService.selectedLabo;

    this.laboratoireService.findMembresBylabos(this.selectedLab.id).subscribe(
      data => {
        console.log('usersId list founded ');
        this.idMembresList = data;
        for (let m of this.idMembresList){
          this.membreService.findById(m).subscribe(data => {
            console.log('labos users list founded ');
            this.membresList.push(data)
          }, error => console.log('Error fetching labos users list') )
        }
      },
      error => console.log('Error fetching usersId list')
    );
  }

  findMembresBylabos(laboratoireId: number){
    this.laboratoireService.findMembresBylabos(laboratoireId).subscribe(
      data => {
        console.log('labos users list founded ');
        this.idMembresList = data;
      },
      error => console.log('Error fetching labos users list')
    );
  }

  get selectedLab(): Laboratoire {
    return this._selectedLab;
  }

  set selectedLab(value: Laboratoire) {
    this._selectedLab = value;
  }

  get idMembresList(): Array<number> {
    return this._idMembresList;
  }

  set idMembresList(value: Array<number>) {
    this._idMembresList = value;
  }

  get membresList(): Array<User> {
    if (this._membresList == null){
      this._membresList = new Array<User>();
    }
    return this._membresList;
  }

  set membresList(value: Array<User>) {
    this._membresList = value;
  }
}

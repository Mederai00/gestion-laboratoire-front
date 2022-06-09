import { Injectable } from '@angular/core';
import {Laboratoire} from "../model/laboratoire.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

const CONTROLLER_REQUEST = '/api/laboratoire';

@Injectable({
  providedIn: 'root'
})

export class LaboratoireService {

  private _laboList: Array<Laboratoire>;
  private _selectedLabo: Laboratoire;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Array<Laboratoire>>{
    return this.http.get<Array<Laboratoire>>(environment.baseUrl + CONTROLLER_REQUEST +'/');
  }

  public findMembresBylabos(laboratoireId: number): Observable<Array<number>>{
    return this.http.get<Array<number>>(environment.baseUrl + CONTROLLER_REQUEST + '/membres/' + laboratoireId);
  }

  public saveLabo(labo: Laboratoire): Observable<Laboratoire>{
    return this.http.post<Laboratoire>(environment.baseUrl + CONTROLLER_REQUEST + '/save-laboratoire/', labo);
  }

  public deleteLabo(idLab: number): Observable<void>{
    return this.http.delete<void>(environment.baseUrl + CONTROLLER_REQUEST + '/delete-laboratoire/id/' + idLab);
  }

  get laboList(): Array<Laboratoire> {
    return this._laboList;
  }

  set laboList(value: Array<Laboratoire>) {
    this._laboList = value;
  }

  get selectedLabo(): Laboratoire {
    return this._selectedLabo;
  }

  set selectedLabo(value: Laboratoire) {
    this._selectedLabo = value;
  }
}

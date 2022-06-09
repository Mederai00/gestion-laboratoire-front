import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Budget} from "../model/budget.model";

const CONTROLLER_REQUEST = '/api/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) { }

  public saveBudget(budget: Budget): Observable<Budget>{
    return this.http.post<Budget>(environment.baseUrl + CONTROLLER_REQUEST + '/save-budget/', budget);
  }
}

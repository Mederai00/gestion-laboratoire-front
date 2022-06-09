import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BudgetPersonnel } from '../models/laboratoire.model';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {
      responseType: 'text',
    });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {
      responseType: 'text',
    });
  }

  findByResponsableId(responsableId: number): Observable<any> {
    return this.http.get(API_URL + 'laboratoire/' + responsableId, {
      responseType: 'json',
    });
  }

  saveBP(bp: BudgetPersonnel): Observable<any> {
    return this.http.post(API_URL + 'budgetpersonnel', bp, {
      responseType: 'json',
    });
  }

  getResponsableBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {
      responseType: 'text',
    });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {
      responseType: 'text',
    });
  }
}

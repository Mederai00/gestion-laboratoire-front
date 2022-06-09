import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {environment} from "../../../environments/environment";

const CONTROLLER_REQUEST = '/api/user';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http: HttpClient) { }

  public findById(id: number): Observable<User>{
    return this.http.get<User>(environment.baseUrl+ CONTROLLER_REQUEST+ '/id/' + id);
  }

  public findUsersWithoutLabos(): Observable<Array<User>>{
    return this.http.get<Array<User>>(environment.baseUrl+ CONTROLLER_REQUEST+ '/users-without-labos/');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from '../models/usuario';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class AuthService {

  AUTH_SERVER: string = 'http://localhost:8080';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient:HttpClient){}

  login(user: UsuarioModel): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/api/login`, user).pipe(tap((res: JwtResponseI) => {
      if (res) {
        this.saveToken(res.dataUser.accessToken, res.dataUser.expireTime)
      }
    }));
  }

  private saveToken(token: string, expireTime: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expireTime);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}


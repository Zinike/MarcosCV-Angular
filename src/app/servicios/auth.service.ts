import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from '../models/usuario';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class AuthService {

  AUTH_SERVER: string = 'https://mycv-springboot.herokuapp.com/api/login';
  authSubject = new BehaviorSubject(false);
  private token: string | undefined;
  constructor(private httpClient:HttpClient){}

  login(user: UsuarioModel): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}`, user).pipe(tap((res: JwtResponseI) => {
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
}


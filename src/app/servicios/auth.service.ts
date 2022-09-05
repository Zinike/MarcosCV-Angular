import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from '../models/usuario';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class AuthService {

  AUTH_SERVER: string = 'https://mycv-springboot.herokuapp.com';
  authSubject = new BehaviorSubject(false);
  private token: string | undefined;
  constructor(private httpClient: HttpClient) { }

  login(user: UsuarioModel): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/login`, user).pipe(tap((respuesta: JwtResponse) => {
      if (respuesta) {
        this.saveToken(respuesta.dataUser.accessToken, respuesta.dataUser.expireTime)
      }
    }));
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_TIME");
  }

  private saveToken(token: string, expireTime: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_TIME", expireTime);
    this.token = token;
  }



}


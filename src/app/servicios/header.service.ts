import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  
  private apiServerUrl='https://mycv-springboot.herokuapp.com/';
  constructor(private http: HttpClient) { }

  public getUser():Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`${this.apiServerUrl}/usuario/id/1`);
  }

  public editarUsuario(usuario:UsuarioModel):Observable<UsuarioModel>{
    return this.http.put<UsuarioModel>(`${this.apiServerUrl}/usuario/update`,usuario);
  }

}

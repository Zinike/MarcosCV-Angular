import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TecnologiasModel } from '../models/tecnologias';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  private apiServerUrl='https://mycv-springboot.herokuapp.com/api';
  constructor(private http:HttpClient) { }

  public obtenerTecnologias():Observable<TecnologiasModel[]>{
    return this.http.get<TecnologiasModel[]>(`${this.apiServerUrl}/tecnologias/all`);
  }

  public agregarTecnologias(tecnologias:TecnologiasModel):Observable<TecnologiasModel>{
    return this.http.post<TecnologiasModel>(`${this.apiServerUrl}/tecnologias/add`,tecnologias);
  }
  
  public editarTecnologias(tecnologias:TecnologiasModel):Observable<TecnologiasModel>{
    return this.http.put<TecnologiasModel>(`${this.apiServerUrl}/tecnologias/update`,tecnologias);
  }

  public deleteTecnologias(tecnologiasId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/tecnologias/delete/${tecnologiasId}`);
  }

}

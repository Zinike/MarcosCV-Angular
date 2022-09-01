import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CapacidadesModel } from '../models/capacidades';

@Injectable({
  providedIn: 'root'
})
export class CapacidadesService {

  private apiServerUrl='https://mycv-springboot.herokuapp.com/';
  constructor(private http:HttpClient) { }

  public obtenerCapacidades():Observable<CapacidadesModel[]>{
    return this.http.get<CapacidadesModel[]>(`${this.apiServerUrl}/capacidades/all`);
  }

  public agregarCapacidades(capacidades:CapacidadesModel):Observable<CapacidadesModel>{
    return this.http.post<CapacidadesModel>(`${this.apiServerUrl}/capacidades/add`,capacidades);
  }
  
  public editarCapacidades(capacidades:CapacidadesModel):Observable<CapacidadesModel>{
    return this.http.put<CapacidadesModel>(`${this.apiServerUrl}/capacidades/update`,capacidades);
  }

  public deleteCapacidades(capacidadesId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/capacidades/delete/${capacidadesId}`);
  }

}

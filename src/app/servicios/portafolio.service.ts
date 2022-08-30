import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PortafolioModel } from '../models/portafolio';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
  
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public obtenerPortafolio():Observable<PortafolioModel[]>{
    return this.http.get<PortafolioModel[]>(`${this.apiServerUrl}/portafolio/all`);
  }

  public agregarPortafolio(portafolio:PortafolioModel):Observable<PortafolioModel>{
    return this.http.post<PortafolioModel>(`${this.apiServerUrl}/portafolio/add`,portafolio);
  }
  
  public editarPortafolio(portafolio:PortafolioModel):Observable<PortafolioModel>{
    return this.http.put<PortafolioModel>(`${this.apiServerUrl}/portafolio/update`,portafolio);
  }

  public deletePortafolio(portafolioId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/portafolio/delete/${portafolioId}`);
  }
}

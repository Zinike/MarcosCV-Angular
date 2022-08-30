import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CapacidadesModel } from 'src/app/models/capacidades';
import { CapacidadesService } from 'src/app/servicios/capacidades.service';

@Component({
  selector: 'app-capacidades',
  templateUrl: './capacidades.component.html',
  styleUrls: ['./capacidades.component.css']
})
export class CapacidadesComponent implements OnInit {

  public capacidades:CapacidadesModel[]=[];

  constructor(private capacidadesService:CapacidadesService) { }

  ngOnInit(): void {
    this.obtenerCapacidades();
  }

  public obtenerCapacidades():void{
    this.capacidadesService.obtenerCapacidades().subscribe({
      next:(Response:CapacidadesModel[]) =>{
        this.capacidades=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}

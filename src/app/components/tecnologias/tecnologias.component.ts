import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TecnologiasModel } from 'src/app/models/tecnologias';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  public tecnologias:TecnologiasModel[]=[];

  constructor(private tecnologiasService:TecnologiasService) { }

  ngOnInit(): void {
    this.obtenerTecnologias();
  }

  public obtenerTecnologias():void{
    this.tecnologiasService.obtenerTecnologias().subscribe({
      next:(Response:TecnologiasModel[]) =>{
        this.tecnologias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}

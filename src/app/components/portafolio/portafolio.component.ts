import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PortafolioModel } from 'src/app/models/portafolio';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  public portafolio:PortafolioModel[]=[];

  constructor(private portafolioService:PortafolioService) { }

  ngOnInit(): void {
    this.obtenerPortafolio();
  }

  public obtenerPortafolio():void{
    this.portafolioService.obtenerPortafolio().subscribe({
      next:(Response:PortafolioModel[]) =>{
        this.portafolio=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}

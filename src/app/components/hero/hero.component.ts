import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


  public usuario:UsuarioModel | undefined;
  public editUsuario:UsuarioModel | undefined;
  
  constructor(private headerService:HeaderService) { }

  ngOnInit(): void {
    this.getUsuario();
  }


  public getUsuario():void{
    this.headerService.getUser().subscribe({
      next:(response: UsuarioModel) => {
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}

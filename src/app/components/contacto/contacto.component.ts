import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

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

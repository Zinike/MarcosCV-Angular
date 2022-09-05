import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AuthService } from '../servicios/auth.service';
import { AuthRoutingModule } from "./auth-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule ,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers:[AuthService]
})
export class AuthModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void{}

  onLogin(form: NgForm):void {

    const email=form.value.email;
    const password=form.value.password;

    this.authService.login(form.value).subscribe(
      res=>{
        console.log(email, password)
        this.router.navigateByUrl('/auth');})
  }
}
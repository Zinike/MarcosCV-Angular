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
    this.authService.login(form.value).subscribe(
      res=>{
        console.log(res);
        this.router.navigateByUrl('/auth');})
  }
}

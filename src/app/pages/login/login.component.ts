import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(
    private route: Router){}

  userName: string;

  login(){
    sessionStorage.setItem('user', this.userName);
    this.route.navigate(['/home']);
  }

}

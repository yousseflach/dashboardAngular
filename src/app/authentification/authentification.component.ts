import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  //declaration des variables==========================================================================
  isconnecter:boolean | string = false;

  constructor(private loginservice: LoginService,private router: Router) { }

  login(mail: string) {
    this.isconnecter = this.loginservice.login(mail);
  }

}

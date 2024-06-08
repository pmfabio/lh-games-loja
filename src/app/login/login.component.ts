import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = 'aluno';
  senha = '1234';

  constructor(private _loginService: LoginService, private _route:Router) {}

  fazerLogin(){
    this._loginService.login(this.login, this.senha);
    this._loginService.setMotraMenu(false);
    this._route.navigate(['/restrito/listar']);
  }





}

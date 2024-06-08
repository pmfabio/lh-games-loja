import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-menu-restrito',
  standalone: true,
  imports: [MatToolbarModule, MatIconButton, RouterModule],
  templateUrl: './menu-restrito.component.html',
  styleUrl: './menu-restrito.component.css'
})
export class MenuRestritoComponent {

  constructor (private _login:LoginService, private _router:Router) {}

  logout():void{
    localStorage.clear();
    this._login.setMotraMenu(true);
    this._router.navigate(['/']);

  }

}

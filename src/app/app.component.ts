import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/*angula material*/
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MenuComponent, InicioComponent, LoginComponent, RodapeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private _login: LoginService) { }

  title = 'LH Games';
  mostrarMenu: boolean = true;

  ngOnInit(): void {
    this._login.getMotraMenu().subscribe(
      (res: boolean) => {
        this.mostrarMenu = res;
      }
    )
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }
}

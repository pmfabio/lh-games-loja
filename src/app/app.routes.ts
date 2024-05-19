import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio',   component: InicioComponent },
  { path: 'login',   component: LoginComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

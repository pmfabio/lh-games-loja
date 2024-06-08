import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RestritoComponent } from './restrito/restrito.component';
import { restritoRoutes } from './restrito/restrito-routing.model';

export const routes: Routes = [
  { path: 'inicio',   component: InicioComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'regitro',   component: RestritoComponent },
  { path: 'restrito',   component: RestritoComponent, children: restritoRoutes },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

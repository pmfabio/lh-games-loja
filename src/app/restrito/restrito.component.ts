import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MenuRestritoComponent } from './menu-restrito/menu-restrito.component';

@Component({
  selector: 'app-restrito',
  standalone: true,
  imports: [MatToolbarModule, MenuRestritoComponent, RouterModule],
  templateUrl: './restrito.component.html',
  styleUrl: './restrito.component.css'
})
export class RestritoComponent {

  logout():void{

  }

}

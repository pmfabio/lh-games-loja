import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostraMenu = new Subject<boolean>();

  constructor() { }

  login(usuario: string, senha: string): void {
    if (usuario === 'aluno' && senha === '1234') {
      localStorage.setItem('token', 'jdslkajjifajosjdlkdjalksdl');
      this.mostraMenu.next(false);
    } else {
      this.mostraMenu.next(true);

    }
  }

  setMotraMenu(valor:boolean){
    this.mostraMenu.next(valor);
  }

  getMotraMenu(){
    return this.mostraMenu.asObservable();
  }
}

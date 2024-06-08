import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {

  const _router = new Router();

  if (localStorage.getItem('token') !== null) {
    return true;
  }

  _router.navigate(['/login']);
  return false;

};


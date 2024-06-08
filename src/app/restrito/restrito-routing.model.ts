import { Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { guardGuard } from '../guard.guard';

export const restritoRoutes: Routes = [
  { path: 'cadastro', component: CadastroProdutoComponent, canActivate: [guardGuard] },
  { path: 'listar', component: ListaProdutoComponent, canActivate: [guardGuard] },
  { path: 'editar/:id', component: AtualizaProdutoComponent, canActivate: [guardGuard] },
];

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  public produto: Produto = new Produto(0, '', '', '', 0);

  constructor(private _produtoService: ProdutoService, private _router: Router) { }

  cadastrar(): void {
    this._produtoService.cadastrar(this.produto).subscribe(
      {
        complete: () => {
          alert("Cadastro efetuado com sucesso!")
          this._router.navigate(['/restrito/listar']);
        },
        error: () => {
          alert("Erro ao cadastrar")
        }
      }
    );
  }

}

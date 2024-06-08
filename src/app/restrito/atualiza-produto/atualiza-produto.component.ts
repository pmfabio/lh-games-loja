import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualiza-produto',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './atualiza-produto.component.html',
  styleUrl: './atualiza-produto.component.css'
})
export class AtualizaProdutoComponent implements OnInit {

  constructor(private _produtoService: ProdutoService, private _router: Router, private _activateRoute: ActivatedRoute) { }

  public produto: Produto = new Produto(0, '', '', '', 0);
  public produtoId = '';

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params) => this.produtoId = params['id']);
    this._produtoService.getProduto(this.produtoId).subscribe(
      (p: Produto) => {
        this.produto = p;
      }
    );
  }

  atualizar(): void {
    this._produtoService.atualizar(this.produto.id, this.produto).subscribe({
      complete: () => {
        alert("atualização efetuada com sucesso!")
        this._router.navigate(['/restrito/listar']);
      },
      error: () => {
        alert("Erro ao atualizar")
      }
    });
  }

}

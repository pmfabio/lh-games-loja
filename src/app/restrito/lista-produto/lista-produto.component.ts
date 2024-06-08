import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Produto } from '../../models/Produto.model';
import { RouterModule } from '@angular/router';
import { ProdutoService } from '../../produto.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css'
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe(
      retornaProduto => {
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        );
      }
    )
  }

  excluir(id: any): void {
    this._produtoService.remover(id).subscribe({
      complete: () => {
        this.listarProdutos();
      },
      error: (e) => {
        alert("Erro ao excluir")
      }
    })
  }

}

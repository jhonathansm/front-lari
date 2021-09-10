import { CadastroService } from './../cadastro-produto/cadastro.service';
import { Produto } from './../interface/produto.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroAdminComponent implements OnInit {

  public produto: Produto = new Produto();
  message = '';
  error: string = '';
  constructor(
    private produtoService: CadastroService
  ) {}

  public ngOnInit() {
    this.produtoService.listarProtudos().subscribe((res) => {
      console.log(res, 'res');
    }, (erro) => {
      console.log(erro, 'erro');
    });
  }

  public request() {
    console.log(this.produto.imagem, 'imagem');
    this.produtoService.cadastroProduto(this.produto).subscribe((res) => {
      console.log(res);
    }, (erro) => {
      console.log(erro, 'erro');
      this.error = erro.error.message;
    });
  }

  public disabled(): boolean {
    return ((this.produto.name === '' || this.produto.name === undefined) &&
            (this.produto.description === '' || this.produto.description === undefined) &&
            (this.produto.imagem === '' || this.produto.imagem === undefined) &&
            (this.produto.peso === 0 || this.produto.peso === undefined)
    )
  }


}

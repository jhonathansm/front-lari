import { Produto } from './interface/produto.interface';
import { Component } from "@angular/core";
import { CadastroService } from './cadastro-produto/cadastro.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public produto: Produto = new Produto();
  message = '';
  error: string = '';
  constructor(
    private produtoService: CadastroService
  ) {}

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

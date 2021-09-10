import { User } from './../../../cadastro/interface/user';
import { CadastroService } from './../../../cadastro/service/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  public user = new User();
  constructor(
    private service: CadastroService,
  ) { }

  ngOnInit(): void {
  }

  public cadastro() {
    this.service.cadastro(this.user).subscribe((response: any) => {
    //  this.message = response;
    }, (error: any) => {
      // this.error = error.msg
      // this.erroBody = error.errors;
    });
  }

}

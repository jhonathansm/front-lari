import { User } from './interface/user';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from './service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public user = new User();
  public message = '';
  public error = '';
  public erroBody = [];
  public msg = false;

  constructor(
    private service: CadastroService,
    ) { }

  ngOnInit(): void {
  }

  public cadastro() {
    this.service.cadastro(this.user).subscribe((response: any) => {
     this.message = response;
    }, (error: any) => {
      this.error = error.msg
      this.erroBody = error.errors;
    });
  }

}

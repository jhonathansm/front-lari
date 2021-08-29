import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {
    email: '',
    password: ''
  };

  public loading = false;
  public form = false;

  constructor(
    private router: Router,
    private service: LoginService
  ) { }

  ngOnInit(): void {

  }

  public login() {
    this.loading = true;
    this.form = true;
    this.service.login(this.user).subscribe((response) => {
      this.loading = false;
      this.form = false;
      console.log(response);
    }, (erro) => {
      this.loading = false;
      this.form = false;
      console.log(erro);
    });
  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './service/login.service';
import { delay } from 'rxjs/operators';

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

  constructor(
    private router: Router,
    private service: LoginService
  ) { }

  ngOnInit(): void {

  }

  public login() {
    this.loading = true;
    this.service.login(this.user).pipe(delay(1000))
    .subscribe((response) => {
      this.loading = false;
      this.router.navigate(['/home'])
      console.log(response);
    }, (erro) => {
      this.loading = false;
      console.log(erro);
    });
  }
}

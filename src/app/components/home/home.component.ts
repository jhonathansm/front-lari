import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public usuario: string | null = '';
  public validation: any;
  constructor() { }

  ngOnInit(): void {
    this.validation = sessionStorage.getItem('context');
    this.usuario = sessionStorage.getItem('name');
  }

}

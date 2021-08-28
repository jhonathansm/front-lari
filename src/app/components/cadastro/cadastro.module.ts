import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CadastroComponent } from './cadastro.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { CadastroService } from './service/cadastro.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CadastroComponent
  ],
  providers: [
    CadastroService
  ]
})
export class CadastroModule {}

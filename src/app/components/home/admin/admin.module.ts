import { ModalModule } from 'src/app/shared/modal/modal.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { AdminComponent } from "./admin.component";
import { CadastroAdminComponent } from './cadastro/cadastro.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [AdminComponent, CadastroAdminComponent, ProdutosDetalhesComponent, UsuarioComponent],
  exports: [AdminComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    ModalModule,
    MatProgressSpinnerModule
  ]
})
export class AdminModule {}

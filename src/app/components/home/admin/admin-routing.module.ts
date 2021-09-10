import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CadastroAdminComponent } from './cadastro/cadastro.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';

const adminRoutes = [
  { path: 'admin', component: AdminComponent, children: [
    { path: 'cadastro-admin', component: CadastroAdminComponent },
    { path: 'lista', component: ProdutosDetalhesComponent }
  ]},

]

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}

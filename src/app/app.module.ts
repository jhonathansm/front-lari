import { HomeModule } from './components/home/home.module';
import { TokenInterceptor } from './components/interceptor/token.interceptor';
import { SpinnerModule } from './shared/util/spinner.module';
import { LoginModule } from './components/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CadastroModule } from './components/cadastro/cadastro.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './components/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    CadastroModule,
    SpinnerModule,
    HomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

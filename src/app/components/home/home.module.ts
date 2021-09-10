import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:[HomeComponent],
  exports: [HomeComponent],
  imports:[
    CommonModule,
    BrowserModule,
    FormsModule,
    AdminModule
  ]
})
export class HomeModule {}

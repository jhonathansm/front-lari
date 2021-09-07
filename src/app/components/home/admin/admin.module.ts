import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [AdminComponent],
  exports: [AdminComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ]
})
export class AdminModule {}

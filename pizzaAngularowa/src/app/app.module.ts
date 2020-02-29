import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ListOfDoctorsComponent } from './list-of-doctors/list-of-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainHeaderComponent,
    MainFooterComponent,
    ListOfDoctorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

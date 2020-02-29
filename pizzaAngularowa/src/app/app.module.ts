import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ListOfDoctorsComponent } from './list-of-doctors/list-of-doctors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  { path: 'list-of-doctors', component: ListOfDoctorsComponent },
  {path: 'main-footer', component: MainFooterComponent },
  { path: '',
    redirectTo: '/main-header',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainHeaderComponent,
    MainFooterComponent,
    ListOfDoctorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

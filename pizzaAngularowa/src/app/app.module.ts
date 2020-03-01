import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {MainFooterComponent} from './main-footer/main-footer.component';
import {ListOfDoctorsComponent} from './list-of-doctors/list-of-doctors.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChatComponent} from './chat/chat.component';
import {DoctorComponent} from './doctor/doctor.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { FindDoktorModalComponent } from './home/find-doktor-modal/find-doktor-modal.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LogInComponent} from './main-header/log-in/log-in.component';

const appRoutes: Routes = [
  {path: 'list-of-doctors', component: ListOfDoctorsComponent},
  {path: 'main-footer', component: MainFooterComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'chat/:id', component: ChatComponent},
  {path: 'home', component: HomeComponent},
  {path: 'doctor', component: DoctorComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainHeaderComponent,
    MainFooterComponent,
    ListOfDoctorsComponent,
    ChatComponent,
    FindDoktorModalComponent,
    DoctorComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  entryComponents: [FindDoktorModalComponent, LogInComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}

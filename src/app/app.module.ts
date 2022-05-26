import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthorsComponent } from './authors/authors.component';
import { FAQComponent } from './faq/faq.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { SignupComponent } from './signup/signup.component';
import { AnnouncementManagmentComponent } from './announcement-managment/announcement-managment.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AnnouncesListComponent } from './announces-list/announces-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ExploreComponent,
    ProfileComponent,
    ContactUsComponent,
    AuthorsComponent,
    FAQComponent,
    HelpCenterComponent,
    SignupComponent,
    AnnouncementManagmentComponent,
    ProfileDetailsComponent,
    AnnouncesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
    timeOut: 150000, // 15 seconds
    closeButton: true,
    progressBar: true,
  }),
  AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

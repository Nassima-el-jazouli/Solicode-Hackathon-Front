import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementManagmentComponent } from './announcement-managment/announcement-managment.component';
import { AuthorsComponent } from './authors/authors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExploreComponent } from './explore/explore.component';
import { FAQComponent } from './faq/faq.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import {AnnonceComponent} from './annonce/annonce.component';
import {AnnouncesListComponent} from './announces-list/announces-list.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'help', component: HelpCenterComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profileDetails', component: ProfileDetailsComponent },
  {path: 'announcementManagment', component: AnnouncementManagmentComponent},
   {path: 'announce', component: AnnonceComponent},
   {path: 'announces-list', component: AnnouncesListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent , canActivate: [AuthService] },
  { path: 'contact', component: ContactComponent , canActivate: [AuthService] },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

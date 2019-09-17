import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CpanelComponent } from './pages/cpanel/cpanel.component';
import { AuthService } from './services/auth.service';
import { EditPageComponent } from './pages/edit-page/edit-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cpanel',
    component: CpanelComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthService]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthService]
      },
      {
        path: 'edit_page',
        component: EditPageComponent,
        canActivate: [AuthService]
      },
      {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AuthService]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

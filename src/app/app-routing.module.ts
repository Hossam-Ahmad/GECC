import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CpanelComponent } from './pages/cpanel/cpanel.component';
import { AuthService } from './services/auth.service';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ClientComponent } from './pages/client/client.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortoflioComponent } from './pages/portoflio/portoflio.component';
import { EditHomeComponent } from './pages/edit-home/edit-home.component';
import { EditAboutComponent } from './pages/edit-about/edit-about.component';
import { EditClientsComponent } from './pages/edit-clients/edit-clients.component';
import { EditServicesComponent } from './pages/edit-services/edit-services.component';
import { EditPortfolioComponent } from './pages/edit-portfolio/edit-portfolio.component';
import { UpdateAboutComponent } from './pages/update-about/update-about.component';
import { UpdateServicesComponent } from './pages/update-services/update-services.component';
import { UpdatePortfolioComponent } from './pages/update-portfolio/update-portfolio.component';
import { UpdateCompanyComponent } from './pages/update-company/update-company.component';
import { UpdateFeaturesComponent } from './pages/update-features/update-features.component';
import { UpdateTopPortfolioComponent } from './pages/update-top-portfolio/update-top-portfolio.component';
import { UpdateTopServicesComponent } from './pages/update-top-services/update-top-services.component';
import { UpdateSliderComponent } from './pages/update-slider/update-slider.component';
import { ChangeComponent } from './pages/change/change.component';
import { ForgetComponent } from './pages/forget/forget.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path : 'client', component: ClientComponent},
  {path : 'services', component: ServicesComponent},
  {path : 'portfolio', component: PortoflioComponent},
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
        path: 'change',
        component: ChangeComponent,
        canActivate: [AuthService]
      },
      {
        path: 'forget',
        component: ForgetComponent,
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
        path: 'edit_home',
        component: EditHomeComponent,
        canActivate: [AuthService]
      },
      {
        path: 'edit_about',
        component: EditAboutComponent,
        canActivate: [AuthService]
      },
      {
        path: 'update_about',
        component: UpdateAboutComponent,
        canActivate: [AuthService]
      },
      {
        path: 'update_slider',
        component: UpdateSliderComponent,
        canActivate: [AuthService]
      },
      {
        path: 'update_top_services',
        component: UpdateTopServicesComponent,
        canActivate: [AuthService]
      },
      {
        path: 'update_top_portfolio',
        component: UpdateTopPortfolioComponent,
        canActivate: [AuthService]
      },
      {
        path: 'update_features',
        component: UpdateFeaturesComponent,
        canActivate: [AuthService]
      },
      {
        path: 'update_company',
        component: UpdateCompanyComponent,
        canActivate: [AuthService]
      },
      {
        path: 'update_services',
        component: UpdateServicesComponent,
        canActivate: [AuthService]
      },
      {
        path: 'update_portfolio',
        component: UpdatePortfolioComponent,
        canActivate: [AuthService]
      },
      {
        path: 'edit_clients',
        component: EditClientsComponent,
        canActivate: [AuthService]
      },
      {
        path: 'edit_services',
        component: EditServicesComponent,
        canActivate: [AuthService]
      },
      {
        path: 'edit_portfolio',
        component: EditPortfolioComponent,
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

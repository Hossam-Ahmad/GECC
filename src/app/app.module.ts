import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponentModule } from './modals/modal.module';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { ContentService } from './services/content.service';
import { ContactService } from './services/contact.service';
import { ContactComponent } from './pages/contact/contact.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DasboardFooterComponent } from './components/dasboard-footer/dasboard-footer.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CpanelComponent } from './pages/cpanel/cpanel.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ClientComponent } from './pages/client/client.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortoflioComponent } from './pages/portoflio/portoflio.component';
import { UpperComponentComponent } from './components/upper-component/upper-component.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LanguageService } from './services/language.service';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { EditHomeComponent } from './pages/edit-home/edit-home.component';
import { EditAboutComponent } from './pages/edit-about/edit-about.component';
import { EditServicesComponent } from './pages/edit-services/edit-services.component';
import { EditClientsComponent } from './pages/edit-clients/edit-clients.component';
import { EditPortfolioComponent } from './pages/edit-portfolio/edit-portfolio.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UpdateAboutComponent } from './pages/update-about/update-about.component';
import { UpdateServicesComponent } from './pages/update-services/update-services.component';
import { UpdatePortfolioComponent } from './pages/update-portfolio/update-portfolio.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { UpdateFeaturesComponent } from './pages/update-features/update-features.component';
import { UpdateSliderComponent } from './pages/update-slider/update-slider.component';
import { UpdateTopServicesComponent } from './pages/update-top-services/update-top-services.component';
import { UpdateTopPortfolioComponent } from './pages/update-top-portfolio/update-top-portfolio.component';
import { UpdateCompanyComponent } from './pages/update-company/update-company.component';
import { ChangeComponent } from './pages/change/change.component';
import { ForgetComponent } from './pages/forget/forget.component';

export function createHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const firebaseConfig = {
  apiKey: 'AIzaSyBbgmxwH5_plwHaw78dt41qlvbcbR4AwmU',
  authDomain: 'gecc-252518.firebaseapp.com',
  databaseURL: 'https://gecc-252518.firebaseio.com',
  projectId: 'gecc-252518',
  storageBucket: 'gs://gecc-252518.appspot.com/',
  messagingSenderId: '1057653798732',
  appId: '1:1057653798732:web:08ec4cb7620407f927c1e9'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ContactComponent,
    SidebarComponent,
    DasboardFooterComponent,
    FooterComponent,
    SliderComponent,
    NavbarComponent,
    CpanelComponent,
    EditPageComponent,
    AboutComponent,
    ClientComponent,
    ServicesComponent,
    PortoflioComponent,
    UpperComponentComponent,
    DashboardNavbarComponent,
    EditHomeComponent,
    EditAboutComponent,
    EditServicesComponent,
    EditClientsComponent,
    EditPortfolioComponent,
    UploadImageComponent,
    UpdateAboutComponent,
    UpdateServicesComponent,
    UpdatePortfolioComponent,
    UpdateFeaturesComponent,
    UpdateSliderComponent,
    UpdateTopServicesComponent,
    UpdateTopPortfolioComponent,
    UpdateCompanyComponent,
    ChangeComponent,
    ForgetComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgbModule,
    NgbdModalComponentModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: createHttpLoader, // exported factory function needed for AoT compilation
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthService,
    ContentService,
    ContactService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

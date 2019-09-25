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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LanguageService } from './services/language.service';

export function createHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const firebaseConfig = {
  apiKey: 'AIzaSyBbgmxwH5_plwHaw78dt41qlvbcbR4AwmU',
  authDomain: 'gecc-252518.firebaseapp.com',
  databaseURL: 'https://gecc-252518.firebaseio.com',
  projectId: 'gecc-252518',
  storageBucket: '',
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdModalComponentModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
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

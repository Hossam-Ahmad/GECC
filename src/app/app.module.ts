import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponentModule } from './modals/modal.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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

export function createHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    BrowserAnimationsModule,
    FontAwesomeModule,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './page/impressum/impressum.component';
import { DonateComponent } from './page/donate/donate.component';
import { PrivacyComponent } from './page/privacy/privacy.component';
import { DefaultHeaderComponent } from './header/default-header/default-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './page/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    DonateComponent,
    PrivacyComponent,
    DefaultHeaderComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

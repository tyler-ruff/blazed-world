import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LazyLoadDirective } from './lazyload.directive';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { SolutionComponent } from './solution/solution.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'blazed.us.auth0.com',
      clientId: 'GaOuLnwDPwSjsuBRknMwVPSUA7ATvNZW'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

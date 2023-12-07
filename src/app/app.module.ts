import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageJeuComponent } from './page-jeu/page-jeu.component';
import { CarteJeuComponent } from './carte-jeu/carte-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageJeuComponent,
    CarteJeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

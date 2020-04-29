import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {  MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';

import { AddHeroComponent } from './add-hero/add-hero.component';

/* @angular/material works for previous versions that angualr 9, and after that, you need to import each module from its specific package*/


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

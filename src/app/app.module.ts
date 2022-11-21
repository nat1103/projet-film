import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FilmService } from './services/film/film.service';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmNewComponent } from './film-new/film-new.component';
import { FilmModifComponent } from './film-modif/film-modif.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmListComponent,
    FilmNewComponent,
    FilmModifComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

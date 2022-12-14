import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmModifComponent } from './film-modif/film-modif.component';
import { FilmNewComponent } from './film-new/film-new.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {
    path: 'films',
    component: FilmListComponent
  },
  {
    path: 'news',
    component: FilmNewComponent
  },
  {
    path: 'modif/:id',
    component: FilmModifComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

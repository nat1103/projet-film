import { Component,OnInit } from '@angular/core';
import { FilmService } from './services/film/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Film';
  films: any = [] ;
  
  constructor(
    private Film: FilmService
  ) { }

  ngOnInit(){
    this.films = this.Film.films;
  }

  onAirAll(){
    this.Film.setOnAir();
  }

  noOnAirAll(){
    this.Film.setNoOnAir();
  }

}

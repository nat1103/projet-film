import { Component, OnInit, Input} from '@angular/core';
import { FilmService } from '../services/film/film.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() filmName:string = '';
  @Input() filmOnAir:boolean = false;
  @Input() filmAffiche:string = '';
  @Input() index:number = 0;

  constructor(
    private Film: FilmService
  ) { }

  ngOnInit(): void {
  }

  getOnAir(): boolean { 
    return this.filmOnAir;
  }

  onWatchFilm(): void {
    console.log('Lecture du film démarrée');
  }

  changeColor(): string{
    return this.filmOnAir ? 'purple' : 'red';
  }
  
  onSwitch() {
    this.Film.switchOnAir(this.index);
  }
}

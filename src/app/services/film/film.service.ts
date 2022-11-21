import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films = [
    {
      title: 'Star Wars',
      onAir: false,
      filmAffiche: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1'
    },
    {
      title: 'Star Trek',
      onAir: true,
      filmAffiche: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1'
    },
    {
      title: 'Star Gate',
      onAir: false,
      filmAffiche: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1'
    },
  ];

  setOnAir() {
    for (const film of this.films) {
      film.onAir = true;
    }
  }

  setNoOnAir() {
    for (const film of this.films) {
      film.onAir = false;
    }
  }

  switchOnAir(index:number){
    this.films[index].onAir = !this.films[index].onAir;
  }
  
  constructor() { }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films = [
    {
      id : 1,
      title: 'Star Wars',
      onAir: false,
      //link of the image star wars
      filmAffiche: 'https://m.media-amazon.com/images/I/71c-O3GaxLL._AC_SY606_.jpg'
    },
    {
      id : 2,
      title: 'Star Trek',
      onAir: true,
      filmAffiche: 'https://fr.web.img6.acsta.net/medias/nmedia/18/62/88/99/19081675.jpg'
    },
    {
      id : 3,
      title: 'Star Gate',
      onAir: false,
      filmAffiche: 'https://fr.web.img6.acsta.net/medias/nmedia/18/36/11/06/19853864.jpg'
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

  getFilmById(id: number) {
    let tmp;
    for (const film of this.films) {
      if (film.id == id) {
        tmp = film;
        
      }
    }

    return tmp;
  }
  
  constructor() { }

}

export class Films {
    id?: string;
    country: string;
    music: string;
    onAir: boolean;
    pictureLink: string;
    productor: string;
    realisator: string;
    realaseDate: string;
    scenario: string;
    synopsis: string;
    time: string;
    title: string;

    constructor() {
        this.country = '';
        this.music = '';
        this.onAir = false;
        this.pictureLink = '';
        this.productor = '';
        this.realisator = '';
        this.realaseDate = '';
        this.scenario = '';
        this.synopsis = '';
        this.time = '';
        this.title = '';
    }
}

import { Termin } from './termin';
import { Uporabnik } from './uporabnik';

export class Postaja {
    id: number;
    ime: string;
    specifikacije: string;
    lokacija: string;
    cena_polnjenja: number;
    obratovalni_cas: string;
    lastnik : Uporabnik;
    artikli: Termin[];
}

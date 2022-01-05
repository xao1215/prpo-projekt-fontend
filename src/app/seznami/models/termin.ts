import { Postaja } from "./postaja"
import { Uporabnik } from "./uporabnik";

export class Termin {
    id: number;
    dan: Date;
    od_ura: Date;
    do_ura: Date;
    uporabnik: { type:Uporabnik, default:null } 
    postaja: Postaja;
}

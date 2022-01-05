import { Termin } from "./termin"

export class Uporabnik {
    id: number;
    ime: string;
    priimek: string;
    username: string;
    email: string;
    password: string;
    termini: Termin[];
}

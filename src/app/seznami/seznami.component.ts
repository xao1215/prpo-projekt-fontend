import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Termin } from './models/termin';

import { Postaja } from './models/postaja';
import { SeznamiService } from './services/seznami.service';

@Component({
    moduleId: module.id,
    selector: 'vsi-seznami',
    templateUrl: 'seznami.component.html'
})
export class SeznamiComponent implements OnInit {
    seznami: Termin[];
    seznam: Termin;

    constructor(private seznamiService: SeznamiService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getSeznami();
    }

    getSeznami(): void {
        this.seznamiService
            .getTermini()
            .subscribe(seznami => {
                this.seznami = seznami
                console.log(this.seznami)
            });
    }

    naPodrobnosti(seznam: Termin): void {
        this.seznam = seznam;
        this.router.navigate(['/termini', this.seznam.id]);
    }

    delete(seznam: Postaja): void {
        this.seznamiService
            .delete(seznam.id)
            .subscribe(() => {
                this.seznami = this.seznami.filter(s => s.id !== seznam.id)})
    }

    dodaj(nekaj:any):void{
        console.log(nekaj)
    }

}

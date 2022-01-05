import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Termin } from './models/termin';

import { Postaja } from './models/postaja';
import { SeznamiService } from './services/seznami.service';
import { Time } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'vsi-seznami',
    templateUrl: 'seznami.component.html'
})
export class SeznamiComponent implements OnInit {
    seznami: Termin[];
    seznam: Termin;
    postaje: Postaja[] = [];

    postaja_id:number = 1;
    termin_dan:Date
    termin_od:Time;
    termin_do:Time;


    constructor(private seznamiService: SeznamiService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getSeznami();
        this.getPostaje();
    }

    getPostaje():void {
        this.seznamiService
        .getPostaje()
        .subscribe(postaje => {
            this.postaje = postaje
            console.log(this.postaje)
        });
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

    bacc(): void {
        this.router.navigate(['termini']);
    }

    submitForm() {
        console.log(this.postaja_id); 
        console.log(this.termin_dan);  
        console.log(this.termin_od)
        console.log(this.termin_do)

        let objekt = `{
            "dan": "${this.termin_dan}",\
            "od_ura": "${this.termin_od}:00",\
            "do_ura": "${this.termin_do}:00",\
            "postaja_id": "${this.postaje[this.postaja_id-1].id}",\
            "uporabnik_id": "2"\
        }`
        this.seznamiService
            .create(objekt)
            .subscribe((termin)=>{
                console.log(termin)
                this.bacc()

            })
            
        
      }

}

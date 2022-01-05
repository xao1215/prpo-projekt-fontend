import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import { switchMap } from 'rxjs/operators';
import {Termin} from './models/termin';

import {Postaja} from './models/postaja';
import {SeznamiService} from './services/seznami.service';

@Component({
    moduleId: module.id,
    selector: 'seznam-podrobnosti',
    templateUrl: 'seznam-podrobnosti.component.html'
})
export class SeznamPodrobnostiComponent implements OnInit {
    seznam: Termin;

    constructor(private seznamService: SeznamiService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.seznamService.getTermin(+params['id'])))
            .subscribe(seznam => this.seznam = seznam);
    }


    nazaj(): void {
        this.router.navigate(['termini']);
    }

    prijava(): void{
        let objekt = {
            "dan": "2005-01-15",
            "od_ura": "13:00:00",
            "do_ura": "19:01:00",
            "postaja_id": "2",
            "uporabnik_id": "2"
        }

        this.seznamService.prijava(this.seznam.id)
        .subscribe(()=>{
            this.nazaj()
        })
    }
}

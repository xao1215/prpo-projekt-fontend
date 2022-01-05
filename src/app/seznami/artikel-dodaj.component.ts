import {Component} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';

import {SeznamiService} from './services/seznami.service';
import { Termin } from './models/termin';
import { switchMap } from 'rxjs/operators';

@Component({
    moduleId: module.id,
    selector: 'dodaj-artikel',
    templateUrl: 'artikel-dodaj.component.html'
})
export class ArtikelDodajComponent {

    artikel: Termin = new Termin;
    seznamId: number;
    private sub: any;

    constructor(private seznamiService: SeznamiService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
           this.seznamId = +params['id'];
        });
      }

      ngOnDestroy() {
        this.sub.unsubscribe();
      }

    // submitForm(): void {
    //     this.seznamiService.create(this.seznamId, this.artikel)
    //         .subscribe(() => this.router.navigate(['/seznami/' + this.seznamId]));
    // }

    nazaj(): void {
        this.router.navigate(['/seznami']);
    }

}

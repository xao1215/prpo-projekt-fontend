import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'prpo-app',
    template: `
        <h1 class="text-dark fw-bold">{{naslov}}</h1>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    naslov = 'Polnilne Postaje';
}

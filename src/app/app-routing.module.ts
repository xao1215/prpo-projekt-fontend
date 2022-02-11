import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeznamiComponent} from './seznami/components/seznami/seznami.component';
import {SeznamPodrobnostiComponent} from './seznami/components/seznam-podrobnosti/seznam-podrobnosti.component';
import { ArtikelDodajComponent } from './seznami/components/artikel-dodaj/artikel-dodaj.component';

const routes: Routes = [
    {path: '', redirectTo: '/termini', pathMatch: 'full'},
    {path: 'termini', component: SeznamiComponent},
    {path: 'termini/:id', component: SeznamPodrobnostiComponent},
    {path: 'termini/:id/dodaj', component: ArtikelDodajComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

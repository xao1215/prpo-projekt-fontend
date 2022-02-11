import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SeznamiComponent} from './seznami/components/seznami/seznami.component';
import {ArtikelDodajComponent} from './seznami/components/artikel-dodaj/artikel-dodaj.component';
import {SeznamPodrobnostiComponent} from './seznami/components/seznam-podrobnosti/seznam-podrobnosti.component';
import {SeznamiService} from './seznami/services/seznami.service';
import { DatePipe } from './seznami/pipes/date-pipe/date.pipe';
import { DatumPipe } from './seznami/pipes/datum-pipe/datum.pipe';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        OwlDateTimeModule, 
        OwlNativeDateTimeModule,
    ],
    declarations: [
        AppComponent,
        SeznamiComponent,
        SeznamPodrobnostiComponent,
        ArtikelDodajComponent,
        DatePipe,
        DatumPipe
    ],
    providers: [SeznamiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


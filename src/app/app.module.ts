import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TagComponent } from './Ansichten/Tag/tag.component';
import { WocheComponent } from "./Ansichten/Woche/woche.component";
import { MonatComponent } from './Ansichten/Monat/monat.component';
import { EinstellungenComponent } from './Navigation/Einstellungen/einstellungen.component';


const appRoutes: Routes = [
  { path: 'monat', component: MonatComponent },
  { path: 'woche', component: WocheComponent },
  { path: 'tag', component: TagComponent },
  { path: 'einstellungen', component: EinstellungenComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MonatComponent,
    WocheComponent,
    TagComponent,
    EinstellungenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

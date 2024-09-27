import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { UsersComponent } from './users/users.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { AjouterstagiaireComponent } from './ajouterstagiaire/ajouterstagiaire.component';
import { AjoutercollaborateurComponent } from './ajoutercollaborateur/ajoutercollaborateur.component';
import { RecrutementlistComponent } from './recrutementlist/recrutementlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilerequisComponent } from './profilerequis/profilerequis.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalindicateurComponent } from './modalindicateur/modalindicateur.component';
import { ModalrelationComponent } from './modalrelation/modalrelation.component';
import { DatePipe } from '@angular/common';
import { BulteindepaieComponent } from './bulteindepaie/bulteindepaie.component';
import { FiltreformComponent } from './filtreform/filtreform.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BulletinpageComponent } from './bulletinpage/bulletinpage.component';
import { TacheComponent } from './tache/tache.component';
import { DemandeprogressComponent } from './demandeprogress/demandeprogress.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListCvComponent } from './list-cv/list-cv.component';
import { AjouterCvComponent } from './ajouter-cv/ajouter-cv.component';
import { CalendrierComponent } from './calendrier/calendrier.component'
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    LeftsidebarComponent,
    UsersComponent,
    RecrutementComponent,
    AjouterstagiaireComponent,
    AjoutercollaborateurComponent,
    RecrutementlistComponent,
    ProfilerequisComponent,
    ModalindicateurComponent,
    ModalrelationComponent,
    BulteindepaieComponent,
    FiltreformComponent,
    BulletinpageComponent,
    TacheComponent,
    DemandeprogressComponent,
    ListCvComponent,
    AjouterCvComponent,
    CalendrierComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    ReactiveFormsModule,
    FullCalendarModule // for FullCalendar!
  ],
  providers: [
    DatePipe,
    HttpClient
  ],
  bootstrap: [
    AppComponent,
    AuthentificationComponent,
    LeftsidebarComponent,
    UsersComponent,
    RecrutementComponent,
    AjouterstagiaireComponent,
    AjoutercollaborateurComponent,
    RecrutementlistComponent
  ]
})
export class AppModule { }

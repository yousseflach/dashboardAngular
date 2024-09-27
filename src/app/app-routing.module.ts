import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { UsersComponent } from './users/users.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AjoutercollaborateurComponent } from './ajoutercollaborateur/ajoutercollaborateur.component';
import { BulteindepaieComponent } from './bulteindepaie/bulteindepaie.component';
import { AjouterstagiaireComponent } from './ajouterstagiaire/ajouterstagiaire.component';
import { BulletinpageComponent } from './bulletinpage/bulletinpage.component';
import { TacheComponent } from './tache/tache.component';
import { ProfilerequisComponent } from './profilerequis/profilerequis.component';
import { DemandeprogressComponent } from './demandeprogress/demandeprogress.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { AjouterCvComponent } from './ajouter-cv/ajouter-cv.component';
import { CalendrierComponent } from './calendrier/calendrier.component';

const routes: Routes = [
  { path: '', redirectTo: 'taches', pathMatch: 'full' },
  { path: 'login', component: AuthentificationComponent },
  { path: 'leftsidebar', component: LeftsidebarComponent },
  { path: 'users', component: UsersComponent },
  { path: 'recrutement', component: RecrutementComponent },
  { path: 'ajoutercollaborateur', component: AjoutercollaborateurComponent },
  { path: 'bulteindepaie', component: BulteindepaieComponent },
  { path: 'ajouterstagiaire', component: AjouterstagiaireComponent },
  { path:'bulletinpage',component:BulletinpageComponent},
  { path: 'taches', component:TacheComponent },
  { path: 'profilerequis', component: ProfilerequisComponent },
  {path: 'demandeprogress', component: DemandeprogressComponent},
  { path: 'list-cv/:demandeid',component:ListCvComponent},
  { path: 'ajoutercv',component:AjouterCvComponent},
  { path: 'Calendrier',component:CalendrierComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

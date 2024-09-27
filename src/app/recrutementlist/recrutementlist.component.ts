import { Component, Input } from '@angular/core';
import { SharedataService } from '../services/sharedata.service';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demande } from '../Models/demande';
import { demandeurService } from '../services/Demandeur/demandeur.service';
import { Utilisateur } from '../Models/utilisateur';
import { apiurl } from '../config';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DemandeprogressComponent } from '../demandeprogress/demandeprogress.component';


@Component({
  selector: 'app-recrutementlist',
  templateUrl: './recrutementlist.component.html',
  styleUrls: ['./recrutementlist.component.css']
})
export class RecrutementlistComponent {
  constructor(private sh: SharedataService, private ngbmodal:NgbModal, private http: HttpClient, private demandeurService: demandeurService) { }
  utilisateur: Utilisateur =localStorage.getItem('utilisateur') ? JSON.parse(localStorage.getItem('utilisateur') || '{}') : null;
  matricule!: string;
  savedata: any;
  @Input() listdemandes!: any;

 

  ngOnInit(): void {
    

  }

  loadCollaborateurs(): void {

    if (this.utilisateur) {
      try {
        this.matricule = this.utilisateur.matricule;

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });

        this.http.get<any[]>(`${apiurl}/collaborateur?matricule=${this.matricule}`).subscribe(
          (data: any) => {
            this.listdemandes = data;
            this.listdemandes = this.listdemandes.filter((demande: Demande) => {
             
              return true; // Keep this item in the list
            });

            console.log(this.listdemandes);
          },
          (error) => {
            console.error('Error fetching data:', error);
          }
        );
      } catch (error) {
        console.error('Error parsing utilisateur from localStorage:', error);
      }
    } else {
      console.error('No utilisateur found in localStorage');
    }
  }
  getSharedPost(): string {
    return this.sh.getSharedPost();
  }

    opensuivi(id: string,demande: Demande) {
      let Progress= this.ngbmodal.open(DemandeprogressComponent, {
         size: 'xl',
         windowClass: 'my-modal',
       })
       Progress.componentInstance.Id=id;
       Progress.componentInstance.demande=demande;
     }

     
  //delete demande collaborateur by id
  onDeleteDemande(demandeId: string): void {
    this.demandeurService.deleteDemande(demandeId).subscribe(
      () => {
        console.log('Demande supprimée avec succès');
        this.loadCollaborateurs();
        // Mettre à jour la liste des demandes ou effectuer d'autres actions nécessaires après la suppression
      },
      error => {
        console.error('Erreur lors de la suppression de la demande :', error);
        // Gérer l'erreur ici si nécessaire
      }
    );
  }

}

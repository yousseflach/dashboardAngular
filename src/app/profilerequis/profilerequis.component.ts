import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Demande } from '../Models/demande';
import { demandeurService } from '../services/Demandeur/demandeur.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../Models/utilisateur';


@Component({
  selector: 'app-profilerequis',
  templateUrl: './profilerequis.component.html',
  styleUrls: ['./profilerequis.component.css']
})
export class ProfilerequisComponent {
  constructor(private modalService: NgbModal, private demandeurService: demandeurService,private http:HttpClient) {
    
  }

  @Input() buttonText!: string;
  @Input() demande!: Demande;
  utilisateur:Utilisateur =localStorage.getItem('utilisateur') ? JSON.parse(localStorage.getItem('utilisateur') || '{}') : null;
  matricule: string = this.utilisateur.matricule;
  commentaire: string | null = "";
  nom: string = "";
  httpHeaders = {
    'Content-Type': 'application/json',
  };

  ngOnInit(): void {
    console.log(this.utilisateur.role);
  
  }
  closeModal() {
    this.modalService.dismissAll();
  }
  rejeter(): void {
    while (this.commentaire == "" || this.commentaire == null) {
      this.commentaire = prompt("Veuillez entrer un commentaire");
      if (this.commentaire === null) {
          // User clicked cancel, handle this case if needed
          // For example, you might break out of the loop or provide a default behavior
          // You could also throw an error or log a message
          return; // Exit the loop if cancel is clicked
      }
  }
  
    const refuserDemande=this.demandeurService.refuserDemande(this.matricule, this.demande.id, this.commentaire);
    this.modalService.dismissAll(refuserDemande);
    window.location.reload();
    
  }
  valider(): void {
    const validerDemande=this.demandeurService.validerDemande(this.matricule, this.demande.id); 
    this.modalService.dismissAll(validerDemande);
    window.location.reload();
  }
  soumettre(): void {
    this.demande.attributes=true;
    this.demandeurService.saveDemande(this.demande);
    this.modalService.dismissAll();  
    window.location.reload();
  }


  demandeestvalider(demandeid:string):any{
     this.demandeurService.demandestvalider(demandeid).then((data: any) => {
      return data;
  }
)}

// Viewdemande(demande: Demande) {
//   this.demande = demande;


}

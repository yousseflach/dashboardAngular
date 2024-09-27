import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedataService } from '../services/sharedata.service';
import { Utilisateur } from '../Models/utilisateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiurl } from '../config';
import { Demande } from '../Models/demande';
import { demandeurService } from '../services/Demandeur/demandeur.service';
import { Hierarchie } from '../Models/hierarchie';

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class RecrutementComponent {

  afficherCollaborateur: boolean = false; // Par défaut, on n'affiche pas le formulaire de recrutement pour un collaborateur
  afficherStagiaire: boolean = false; // Par défaut, on n'affiche pas le formulaire de recrutement pour un stagiaire
  afficherList: boolean = true; // Par défaut, on affiche la liste des recrutements
  activeTab: string = 'List'; // Par défaut, l'onglet "List" est actif
  selectedOption: string='CP';
  creationVisible: boolean = true;
  remplacementVisible: boolean = false;
  post: string = "";
  utilisateur: Utilisateur=localStorage.getItem('utilisateur')?JSON.parse(localStorage.getItem('utilisateur')||'{}'):null;
  listeCollaborateurs: any;
  savedata:any ;
  count:number=0;
  data:any;
  nom: string = "jjjj";
  isSidebarVisible = true;
  listdemandes!: any;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  params={
    'matricule':this.utilisateur.matricule.trim()
  }

  constructor(private modalService: NgbModal,private sh:SharedataService,private http:HttpClient,private demandeurService: demandeurService) {
   }
   ngOnInit(): void {
    this.loadCollaborateurs();
    
   }

  receiveData(data: boolean) {
    console.log("this is the data camme from side bare: "+data);
    this.isSidebarVisible = data;
  }

   loadCollaborateurs(): void {
    if (this.utilisateur.role === 'RH') {
        this.http.get<any[]>(`${apiurl}/collaborateur/all`, { headers: this.headers }).subscribe(
            (data: any) => {
                this.listeCollaborateurs = data || [];
                this.listdemandes = data || [];
                this.sortListDemandes();
                console.log(this.listdemandes);
            },
            (error) => {
                console.error('Error fetching data:', error);
            }
        );
    } else {
        this.http.get<any[]>(`${apiurl}/collaborateur`, { headers: this.headers, params: this.params }).subscribe(
            (data: any) => {
                this.listeCollaborateurs = data || [];
                this.listdemandes = data || [];
                this.sortListDemandes();
                console.log(this.listdemandes);
            },
            (error) => {
                console.error('Error fetching data:', error);
            }
        );
    }
}
// trier listdemandes par statut et hierarchie
sortListDemandes(): void {
  this.listdemandes.forEach((element: Demande) => {
    // trie hierarchie par statut "En cours" en premier, puis par date de creation
    element.hierarchies.sort((a: Hierarchie, b: Hierarchie) => {
      if (a.statut === "En cours" && b.statut !== "En cours") {
        return -1; // a avant b
      } else if (a.statut !== "En cours" && b.statut === "En cours") {
        return 1; // b avant a
      } else {
        // Même statut ou autres cas, trie par date de creation
        return a.datedecreation < b.datedecreation ? -1 : 1;
      }
    });
  });
}







  setActiveTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'Collaborateur') {
      this.afficherCollaborateur = true;
      this.afficherStagiaire = false;
      this.afficherList = false;
    }
    if (tab === 'Stagiaire') {
      this.afficherCollaborateur = false;
      this.afficherStagiaire = true;
      this.afficherList = false;
    }
    if (tab === 'List') {
      this.afficherCollaborateur = false;
      this.afficherStagiaire = false;
      this.afficherList = true;
    }
  }
  toggleOptions() {

    if (this.selectedOption == "CP") {

      this.creationVisible = true;
      this.remplacementVisible = false;
    } else if (this.selectedOption === 'RM') {
      this.creationVisible = false;
      this.remplacementVisible = true;
    }
  }

  getdemandeur(matricule: string): any {
  
    this.http.get(`${apiurl}/login/Demandeur/${matricule}`).subscribe((data: any) => {
      this.nom =data.nom+" "+data.prenom;
    })

    console.log(this.nom);
    return this.nom;
  }

}

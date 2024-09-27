import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Demande } from '../Models/demande';
import { apiurl } from '../config';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfilerequisComponent } from '../profilerequis/profilerequis.component';
import { Utilisateur } from '../Models/utilisateur';
import { DemandeprogressComponent } from '../demandeprogress/demandeprogress.component';
import { Tache } from '../Models/tache';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent {
  constructor(private http: HttpClient,private ngbmodal:NgbModal) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  taches: Demande[] = [];
  nom: string = "";
  mail: string = "";
  utilisateur: Utilisateur = localStorage.getItem('utilisateur') ? JSON.parse(localStorage.getItem('utilisateur') || '{}') : null;
  matricule: string = this.utilisateur.matricule;
  isSidebarVisible = true;

  receiveData(data: boolean) {
    console.log("this is the data camme from side bare: "+data);
    this.isSidebarVisible = data;
  }


  ngOnInit(): void {
    this.http.get(`${apiurl}/hierarchies/demandes/${this.matricule}`, { headers: this.headers }).subscribe((data: any) => {
      this.taches = data;
      console.log(this.taches);
    });

  }


  // getdemandeur(matricule: string): any {
  //   this.http.get(`${apiurl}/login/demandeur/${matricule}`, { headers: this.headers }).subscribe((data: any) => {
  //     this.nom=data.nom+" "+data.prenom;
  //     this.mail=data.mail;
  //   })
  //   return this.nom;
  // }

  openDialog(demande: Demande): void {
   const description=this.ngbmodal.open(ProfilerequisComponent, {
      size: 'xl',
      backdrop: 'static',
      windowClass: 'my-modal',
    });
    description.componentInstance.demande=demande;
    description.componentInstance.buttonText=demande.taches[demande.taches.length-1].etape;
   

    
  }

  getutilisateur(matricule: string):string {
    let params = new HttpParams().set('matricule', matricule);
     this.http.post<Utilisateur>(apiurl, params).subscribe((utilisateur: Utilisateur) => {
      console.log("ana hna ",utilisateur);
      this.nom = utilisateur.nom + " " + utilisateur.prenom;
    });
    return this.nom;
  }

  opensuivi(id: string,demande: Demande) {
   let Progress= this.ngbmodal.open(DemandeprogressComponent, {
      size: 'xl',
      windowClass: 'my-modal',
    })
    Progress.componentInstance.Id=id;
    Progress.componentInstance.demande=demande;
  }

  statusdetache(tache:any[]):string{
    tache.sort((a, b) => {
      return new Date(a.dateDeDebut).getTime() - new Date(b.dateDeDebut).getTime();
    });
    return tache[tache.length-1].etape;
  }

  // openprogress(demandeid: string) {
    
  //   return alert("hello");
  // }

}

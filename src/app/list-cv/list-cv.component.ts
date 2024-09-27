import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AjouterCvComponent } from '../ajouter-cv/ajouter-cv.component';
import { HttpClient } from '@angular/common/http';
import { CandidatService } from '../services/candidat/candidat.service';
import { Candidat } from '../Models/candidat';
import { Utilisateur } from '../Models/utilisateur';
import { el } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent {
  demandeId: string | null = '';
  listCvChoisi: any[] = [];
  listCandidats: Candidat[] = [];
  utilisateur:Utilisateur=localStorage.getItem('utilisateur')?JSON.parse(localStorage.getItem('utilisateur')||'{}'):null;
  constructor(private route: ActivatedRoute, private router: Router,private ngbModal: NgbModal,private http: HttpClient,private candidatService: CandidatService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
      const afficherListCv = params['afficherlistcv'];
      if (afficherListCv === 'true') {
        this.changeAfficherListCvToFalse();
      }
    });
    this.route.paramMap.subscribe(params => {
      this.demandeId = params.get('demandeid');
    });

    if (this.demandeId) {
      this.getAllCandidatsByDemandeId(this.demandeId);
    }
  }

  changeAfficherListCvToFalse(): void {
    const queryParams = { ...this.route.snapshot.queryParams };
    queryParams['afficherlistcv'] = 'false';

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge', // pour maintenir les autres paramètres d'URL
    });
  }

  ajouterCv(): void {
   const modalRef = this.ngbModal.open(AjouterCvComponent,{
      size: 'lg',
      centered: true,
      windowClass: 'my-modal',

    });
    modalRef.componentInstance.demandeId =this.demandeId;
  }

  getAllCandidatsByDemandeId(demandeId: string) {
    return this.candidatService.getCandidatByDemandeId(demandeId).then((response: any) => {
      this.listCandidats = response;
      console.log(this.listCandidats);
    }, (error: any) => {
      console.error(error);
    });
  }

  //envoyerCvmanager
  envoyerCvmanager(demandeid:string | null):boolean | void{
    if(this.listCandidats.length==0 || !demandeid){
      return ;
    }
    this.candidatService.envoyerCvmanager(demandeid).then((data: any) => {
      console.log(data);
      if(data){
        alert("Cvs envoyé");
        this.router.navigate(['/taches']);
      }else{
        alert("Cv non envoyé");
      }
    },
    (error: any) => {
      alert(error);
    });
    return true;
  }

  //envoyerCvrh
  envoyerCvrh():boolean | void{
    
    if(this.listCandidats.length==0){
      return ;
    }
    this.candidatService.envoyerCvrh(this.demandeId,this.listCvChoisi).then((data: any) => {
      console.log(data);
      if(data){
        alert("Cvs envoyé");
        this.router.navigate(['/taches']);
      }else{
        alert("Cv non envoyé");
      }
    },
    (error: any) => {
      alert(error);
    });
    return true;
  }

  selectCandidat(event: any, id: string): void {
    const isChecked = event.target.checked;
    if (!isChecked) {
      this.listCvChoisi.splice(this.listCvChoisi.indexOf(id), 1);
      return;
    }else{
      this.listCvChoisi.push(id);         
    }
    console.log(this.listCvChoisi);
  
  }
}

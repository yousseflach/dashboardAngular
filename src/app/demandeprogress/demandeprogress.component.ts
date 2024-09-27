import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { HierarchieService } from '../services/hierarchie/hierarchie.service';
import { apiurl } from '../config';
import { demandeurService } from '../services/Demandeur/demandeur.service';
import { Demande } from '../Models/demande';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-demandeprogress',
  templateUrl: './demandeprogress.component.html',
  styleUrls: ['./demandeprogress.component.css']
})
export class DemandeprogressComponent {
  constructor(private http: HttpClient,private hierarchieservice:HierarchieService,private demandeurService: demandeurService) { }
  @Input() Id!:string;
  @Input() demande!:Demande;
  listHierarchie!:any[];
  nom:string="";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

 async ngOnInit(): Promise<void> {
    await this.hierarchieservice.getHierarchieList(this.Id).then((data: any) => {
      //trier data par date de creation
      data.sort((a: any, b: any) => new Date(b.datedecreation).getTime() - new Date(a.datedecreation).getTime());
      this.listHierarchie = data;
      console.log(this.listHierarchie);
    }
  );
  }

getHierarchieList():any{
  this.http.get<any[]>(`${apiurl}/hierarchies/${this.Id}`, { headers: this.headers}).subscribe(
    (data: any) => {
      console.log(data);
      this.listHierarchie = data;
      
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
  console.log(this.listHierarchie);
}

changecouleur(statut:string):string{
  if(statut=="En cours"){
    return "bullet orange bg-warning";
  }
  else if(statut=="Valider"){
    return "bullet green bg-success";
  }
  else{
    return "bullet pink bg-danger";
  }
}








}

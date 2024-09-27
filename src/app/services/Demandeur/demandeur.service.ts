import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, lastValueFrom } from 'rxjs';
import { Demande } from 'src/app/Models/demande';
import { Utilisateur } from 'src/app/Models/utilisateur';
import { apiurl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class demandeurService {
  // matricule:string=localStorage.getItem('utilisateur') ? JSON.parse(localStorage.getItem('utilisateur') || '{}').matricule : '';
  // matricule:string="012594F";
  nom:string="";
  valider:boolean=false;
  refuser:boolean=false;
  listesociete: any[] = [];

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  // getdemandeur(matricule: string): Promise<any> {
  //   return firstValueFrom(this.http.get<any>(`${apiurl}/login/demandeur/${matricule}`, { headers: this.httpHeaders }));
  // }

  validerDemande(matricule: string, demandeid: string): boolean {
   this.http.post(`${apiurl}/hierarchies/valider/${demandeid}/${matricule}`, {}, { headers: this.httpHeaders }).subscribe((data: any) => {
     this.valider=data;
   })
  return this.valider;
  }
  refuserDemande(matricule: string, demandeid: string,commentaire:string): boolean {
    this.http.post(`${apiurl}/hierarchies/refuser/${demandeid}/${matricule}/${commentaire}`, {}, { headers: this.httpHeaders }).subscribe((data: any) => {
      this.refuser=data;
    })
   return this.refuser;
   }

   saveDemande(demande: any): boolean | any {
    this.http.post(`${apiurl}/collaborateur`, demande, { headers: this.httpHeaders }).subscribe((data: any) => {
    alert("demande envoyé" );
    console.log(data);
    return data;
    },(error) => {
      console.error('Error fetching data:', error);
      return error;
    }
  )
   }
   listsociete(): any {
     this.http.get(`${apiurl}/listsociete`).subscribe((data: any) => {
      this.listesociete = data;
    }
  )
    return this.listesociete;
   }

   listDirectionOUMagasin(fonction:string ,societe: string): Promise<any> {
    const params=new HttpParams()
        .set('fonction',fonction)
        .set('societe',societe);
    return firstValueFrom(this.http.get<any>(`${apiurl}/listeDirection`, { headers: this.httpHeaders,params:params }));
   }

   demandestvalider(demandeid:string):Promise<any>{
    const matricule = localStorage.getItem('utilisateur') ? JSON.parse(localStorage.getItem('utilisateur') || '{}').matricule : '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return firstValueFrom(this.http.get<any[]>(`${apiurl}//Hierarchie/demandeestvalide`, { headers:headers, params: {demandeid:demandeid,matricule:matricule}}));
   }

    listedemandeur(matricule: string): Promise<any> {
      const params=new HttpParams().set('matricule',matricule);
      return firstValueFrom(this.http.get<any>(`${apiurl}/login/demandeur/liste_nom_prenom_matricule`, { headers: this.httpHeaders,params:params }));
    }

    listesousdirection( matricule: string): Promise<any> {
     const params=new HttpParams().set('matricule',matricule);
     if(matricule==""){
      return new Promise((resolve, reject) => {
        resolve([]);
      });
     }
     return firstValueFrom(this.http.get<any>(`${apiurl}/login/demandeur/listeUo`, { headers: this.httpHeaders,params:params }));
    }

    //charger les relations hierarchiques liste string separer par espace

    listerelationhierarchique(matricule: string, uo: string): Promise<any> {
      const params=new HttpParams()
      .set('matricule',matricule)
      .set('uo',uo);
      return firstValueFrom(this.http.get<any>(`${apiurl}/login/demandeur/emploi`, { headers: this.httpHeaders,params:params }));
    }

    listeEmploi(codeuo: string | undefined): Promise<any> {
      if(codeuo==undefined){
        return new Promise((resolve, reject) => {
          resolve([]);
        });
      }
      const params=new HttpParams().set('code_uo',codeuo);
      return lastValueFrom(this.http.get<any>(`${apiurl}/login/demandeur/listeEmploi`, { headers: this.httpHeaders,params:params }));
    } 

    //delete demande collaborateur
    deleteDemande(demandeid: string): Observable<any> {
      const url = `${apiurl}/collaborateur/${demandeid}`;
      return this.http.delete<any>(url, { headers: this.httpHeaders }).pipe(
        catchError(error => {
          // Gérer l'erreur ici si nécessaire
          console.error('Erreur lors de la suppression de la demande :', error);
          throw error; // Rethrow l'erreur pour que le composant consommateur puisse la gérer
        })
      );
    }

    // liste des emplois
    listeEmplois(direction: string): Promise<any> {
      const params=new HttpParams().set('direction',direction);
      return firstValueFrom(this.http.get<any>(`${apiurl}/login/demandeur/listeEmploiByDirectionOrEtablissement`, { headers: this.httpHeaders,params:params }));
    }


    //sauvegarder la demande
    sauvegarderDemande_get(demande: Demande|null, matricule: string):Promise<any> {
      const params=new HttpParams().set('matricule',matricule);
      if(demande!=null){
        params.set('demande',JSON.stringify(demande));
        return firstValueFrom(this.http.post<any>(`${apiurl}/collaborateur/sauvegarder`,demande,{ headers: this.httpHeaders,params:params }));
      }
      return firstValueFrom(this.http.get<any>(`${apiurl}/collaborateur/sauvegarder`,{ headers: this.httpHeaders,params:params }));
    }
}

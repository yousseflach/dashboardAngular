import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { apiurl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })


  ajouterCandidat(formData: FormData):Observable<any>{
    return this.http.post<any>(`${apiurl}/candidates/upload`,formData);
  }
  //getcandidat by demandeid
  getCandidatByDemandeId(demandeId: string): Promise<any> {
    return firstValueFrom(this.http.get<any>(`${apiurl}/candidates/${demandeId}`, { headers: this.httpHeaders }));
  }

  envoyerCvmanager(demandeid:string):Promise<any>{
    return firstValueFrom(this.http.post<any>(`${apiurl}/candidates/envoyerCv/${demandeid}`, { headers: this.httpHeaders }));
  }

  envoyerCvrh(demandeid: string | null, candidats: string[]): Promise<any> {
    // Create HttpParams and append each candidat to it
    let params = new HttpParams();
    candidats.forEach(candidat => {
      params = params.append('candidats', candidat);
    });

    // Make the HTTP POST request
    return firstValueFrom(this.http.post<any>(
      `${apiurl}/candidates/envoyerCvrh/${demandeid}`,
      {},
      { headers: this.httpHeaders, params: params }
    ));
  }

}

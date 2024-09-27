import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Hierarchie } from 'src/app/Models/hierarchie';
import { apiurl } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class HierarchieService {

 
  listHierarchie!:Hierarchie[];
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })
   constructor(private http: HttpClient) { }

   getHierarchieList(demandeid: string): Promise<any> {
    return firstValueFrom(this.http.get<any>(`${apiurl}/hierarchies/${demandeid}`, { headers: this.httpHeaders }));
  }
}

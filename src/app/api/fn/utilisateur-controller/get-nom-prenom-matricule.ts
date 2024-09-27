/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NomPrenomMatricule } from '../../models/nom-prenom-matricule';

export interface GetNomPrenomMatricule$Params {
  matricule: string;
}

export function getNomPrenomMatricule(http: HttpClient, rootUrl: string, params: GetNomPrenomMatricule$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NomPrenomMatricule>>> {
  const rb = new RequestBuilder(rootUrl, getNomPrenomMatricule.PATH, 'get');
  if (params) {
    rb.query('matricule', params.matricule, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<NomPrenomMatricule>>;
    })
  );
}

getNomPrenomMatricule.PATH = '/login/demandeur/liste_nom_prenom_matricule';

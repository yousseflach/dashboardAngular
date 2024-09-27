/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollaborateurDto } from '../../models/collaborateur-dto';

export interface GetAllCollaborateurs$Params {
  matricule: string;
}

export function getAllCollaborateurs(http: HttpClient, rootUrl: string, params: GetAllCollaborateurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CollaborateurDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllCollaborateurs.PATH, 'get');
  if (params) {
    rb.query('matricule', params.matricule, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CollaborateurDto>>;
    })
  );
}

getAllCollaborateurs.PATH = '/collaborateur';

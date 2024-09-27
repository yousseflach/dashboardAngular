/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Collaborateur } from '../../models/collaborateur';

export interface Getdemandes$Params {
  matricule: string;
}

export function getdemandes(http: HttpClient, rootUrl: string, params: Getdemandes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaborateur>>> {
  const rb = new RequestBuilder(rootUrl, getdemandes.PATH, 'get');
  if (params) {
    rb.path('matricule', params.matricule, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Collaborateur>>;
    })
  );
}

getdemandes.PATH = '/hierarchies/demandes/{matricule}';

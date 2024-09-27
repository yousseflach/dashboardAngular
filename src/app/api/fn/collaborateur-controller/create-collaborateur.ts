/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollaborateurDto } from '../../models/collaborateur-dto';

export interface CreateCollaborateur$Params {
      body: CollaborateurDto
}

export function createCollaborateur(http: HttpClient, rootUrl: string, params: CreateCollaborateur$Params, context?: HttpContext): Observable<StrictHttpResponse<CollaborateurDto>> {
  const rb = new RequestBuilder(rootUrl, createCollaborateur.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollaborateurDto>;
    })
  );
}

createCollaborateur.PATH = '/collaborateur';

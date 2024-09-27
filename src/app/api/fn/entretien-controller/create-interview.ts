/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntretienDto } from '../../models/entretien-dto';

export interface CreateInterview$Params {
      body: EntretienDto
}

export function createInterview(http: HttpClient, rootUrl: string, params: CreateInterview$Params, context?: HttpContext): Observable<StrictHttpResponse<EntretienDto>> {
  const rb = new RequestBuilder(rootUrl, createInterview.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntretienDto>;
    })
  );
}

createInterview.PATH = '/entretiens';

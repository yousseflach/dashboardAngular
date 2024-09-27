/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntretienDto } from '../../models/entretien-dto';

export interface GetInterviewById$Params {
  id: string;
}

export function getInterviewById(http: HttpClient, rootUrl: string, params: GetInterviewById$Params, context?: HttpContext): Observable<StrictHttpResponse<EntretienDto>> {
  const rb = new RequestBuilder(rootUrl, getInterviewById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getInterviewById.PATH = '/entretiens/{id}';

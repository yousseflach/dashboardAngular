/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntretienDto } from '../../models/entretien-dto';

export interface GetAllInterviews$Params {
}

export function getAllInterviews(http: HttpClient, rootUrl: string, params?: GetAllInterviews$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EntretienDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllInterviews.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EntretienDto>>;
    })
  );
}

getAllInterviews.PATH = '/entretiens';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TacheDto } from '../../models/tache-dto';

export interface GetAllTaches$Params {
}

export function getAllTaches(http: HttpClient, rootUrl: string, params?: GetAllTaches$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TacheDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllTaches.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TacheDto>>;
    })
  );
}

getAllTaches.PATH = '/taches';

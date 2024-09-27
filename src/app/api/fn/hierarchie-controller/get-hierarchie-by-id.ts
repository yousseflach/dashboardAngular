/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HierarchieDto } from '../../models/hierarchie-dto';

export interface GetHierarchieById$Params {
  id: string;
}

export function getHierarchieById(http: HttpClient, rootUrl: string, params: GetHierarchieById$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HierarchieDto>>> {
  const rb = new RequestBuilder(rootUrl, getHierarchieById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<HierarchieDto>>;
    })
  );
}

getHierarchieById.PATH = '/hierarchies/{id}';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HierarchieDto } from '../../models/hierarchie-dto';

export interface GetAllHierarchies$Params {
}

export function getAllHierarchies(http: HttpClient, rootUrl: string, params?: GetAllHierarchies$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HierarchieDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllHierarchies.PATH, 'get');
  if (params) {
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

getAllHierarchies.PATH = '/hierarchies';

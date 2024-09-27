/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HierarchieDto } from '../../models/hierarchie-dto';

export interface GetHierarchieByDemandeId$Params {
  demandeId: string;
}

export function getHierarchieByDemandeId(http: HttpClient, rootUrl: string, params: GetHierarchieByDemandeId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HierarchieDto>>> {
  const rb = new RequestBuilder(rootUrl, getHierarchieByDemandeId.PATH, 'get');
  if (params) {
    rb.path('demandeId', params.demandeId, {});
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

getHierarchieByDemandeId.PATH = '/hierarchies/Hierarchie/{demandeId}';

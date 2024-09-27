/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StageDto } from '../../models/stage-dto';

export interface GetAllStages$Params {
}

export function getAllStages(http: HttpClient, rootUrl: string, params?: GetAllStages$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StageDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllStages.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StageDto>>;
    })
  );
}

getAllStages.PATH = '/Stagiaire';

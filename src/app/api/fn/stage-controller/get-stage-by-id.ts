/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StageDto } from '../../models/stage-dto';

export interface GetStageById$Params {
  id: string;
}

export function getStageById(http: HttpClient, rootUrl: string, params: GetStageById$Params, context?: HttpContext): Observable<StrictHttpResponse<StageDto>> {
  const rb = new RequestBuilder(rootUrl, getStageById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StageDto>;
    })
  );
}

getStageById.PATH = '/Stagiaire/{id}';

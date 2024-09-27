/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DirectionOuMagasinDto } from '../../models/direction-ou-magasin-dto';

export interface GetAllDirectionOuMagasins$Params {
}

export function getAllDirectionOuMagasins(http: HttpClient, rootUrl: string, params?: GetAllDirectionOuMagasins$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DirectionOuMagasinDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllDirectionOuMagasins.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DirectionOuMagasinDto>>;
    })
  );
}

getAllDirectionOuMagasins.PATH = '/direction-ou-magasins';

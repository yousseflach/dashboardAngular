/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DirectionOuMagasinDto } from '../../models/direction-ou-magasin-dto';

export interface CreateDirectionOuMagasin$Params {
      body: DirectionOuMagasinDto
}

export function createDirectionOuMagasin(http: HttpClient, rootUrl: string, params: CreateDirectionOuMagasin$Params, context?: HttpContext): Observable<StrictHttpResponse<DirectionOuMagasinDto>> {
  const rb = new RequestBuilder(rootUrl, createDirectionOuMagasin.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DirectionOuMagasinDto>;
    })
  );
}

createDirectionOuMagasin.PATH = '/direction-ou-magasins';

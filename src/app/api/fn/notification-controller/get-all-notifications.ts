/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NotificationDto } from '../../models/notification-dto';

export interface GetAllNotifications$Params {
}

export function getAllNotifications(http: HttpClient, rootUrl: string, params?: GetAllNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NotificationDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllNotifications.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<NotificationDto>>;
    })
  );
}

getAllNotifications.PATH = '/notifications';

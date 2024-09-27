/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface Refuserdemande$Params {
  id: string;
  commentaire: string;
  matricule: string;
}

export function refuserdemande(http: HttpClient, rootUrl: string, params: Refuserdemande$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
  const rb = new RequestBuilder(rootUrl, refuserdemande.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('commentaire', params.commentaire, {});
    rb.path('matricule', params.matricule, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
    })
  );
}

refuserdemande.PATH = '/hierarchies/refuser/{id}/{matricule}/{commentaire}';

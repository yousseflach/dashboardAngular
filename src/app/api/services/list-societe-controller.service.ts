/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { listDirection } from '../fn/list-societe-controller/list-direction';
import { ListDirection$Params } from '../fn/list-societe-controller/list-direction';
import { listSociete } from '../fn/list-societe-controller/list-societe';
import { ListSociete$Params } from '../fn/list-societe-controller/list-societe';

@Injectable({ providedIn: 'root' })
export class ListSocieteControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listSociete()` */
  static readonly ListSocietePath = '/listsociete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listSociete()` instead.
   *
   * This method doesn't expect any request body.
   */
  listSociete$Response(params?: ListSociete$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return listSociete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listSociete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listSociete(params?: ListSociete$Params, context?: HttpContext): Observable<Array<string>> {
    return this.listSociete$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `listDirection()` */
  static readonly ListDirectionPath = '/listeDirection';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listDirection()` instead.
   *
   * This method doesn't expect any request body.
   */
  listDirection$Response(params: ListDirection$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return listDirection(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listDirection$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listDirection(params: ListDirection$Params, context?: HttpContext): Observable<Array<string>> {
    return this.listDirection$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

}

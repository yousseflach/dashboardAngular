/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAllUsers1 } from '../fn/user-controller/get-all-users-1';
import { GetAllUsers1$Params } from '../fn/user-controller/get-all-users-1';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllUsers1()` */
  static readonly GetAllUsers1Path = '/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers1$Response(params?: GetAllUsers1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return getAllUsers1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers1(params?: GetAllUsers1$Params, context?: HttpContext): Observable<Array<User>> {
    return this.getAllUsers1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createDirectionOuMagasin } from '../fn/direction-ou-magasin-controller/create-direction-ou-magasin';
import { CreateDirectionOuMagasin$Params } from '../fn/direction-ou-magasin-controller/create-direction-ou-magasin';
import { deleteDirectionOuMagasin } from '../fn/direction-ou-magasin-controller/delete-direction-ou-magasin';
import { DeleteDirectionOuMagasin$Params } from '../fn/direction-ou-magasin-controller/delete-direction-ou-magasin';
import { DirectionOuMagasinDto } from '../models/direction-ou-magasin-dto';
import { getAllDirectionOuMagasins } from '../fn/direction-ou-magasin-controller/get-all-direction-ou-magasins';
import { GetAllDirectionOuMagasins$Params } from '../fn/direction-ou-magasin-controller/get-all-direction-ou-magasins';
import { getDirectionOuMagasinById } from '../fn/direction-ou-magasin-controller/get-direction-ou-magasin-by-id';
import { GetDirectionOuMagasinById$Params } from '../fn/direction-ou-magasin-controller/get-direction-ou-magasin-by-id';

@Injectable({ providedIn: 'root' })
export class DirectionOuMagasinControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllDirectionOuMagasins()` */
  static readonly GetAllDirectionOuMagasinsPath = '/direction-ou-magasins';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDirectionOuMagasins()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDirectionOuMagasins$Response(params?: GetAllDirectionOuMagasins$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DirectionOuMagasinDto>>> {
    return getAllDirectionOuMagasins(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllDirectionOuMagasins$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDirectionOuMagasins(params?: GetAllDirectionOuMagasins$Params, context?: HttpContext): Observable<Array<DirectionOuMagasinDto>> {
    return this.getAllDirectionOuMagasins$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DirectionOuMagasinDto>>): Array<DirectionOuMagasinDto> => r.body)
    );
  }

  /** Path part for operation `createDirectionOuMagasin()` */
  static readonly CreateDirectionOuMagasinPath = '/direction-ou-magasins';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createDirectionOuMagasin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDirectionOuMagasin$Response(params: CreateDirectionOuMagasin$Params, context?: HttpContext): Observable<StrictHttpResponse<DirectionOuMagasinDto>> {
    return createDirectionOuMagasin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createDirectionOuMagasin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDirectionOuMagasin(params: CreateDirectionOuMagasin$Params, context?: HttpContext): Observable<DirectionOuMagasinDto> {
    return this.createDirectionOuMagasin$Response(params, context).pipe(
      map((r: StrictHttpResponse<DirectionOuMagasinDto>): DirectionOuMagasinDto => r.body)
    );
  }

  /** Path part for operation `getDirectionOuMagasinById()` */
  static readonly GetDirectionOuMagasinByIdPath = '/direction-ou-magasins/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDirectionOuMagasinById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDirectionOuMagasinById$Response(params: GetDirectionOuMagasinById$Params, context?: HttpContext): Observable<StrictHttpResponse<DirectionOuMagasinDto>> {
    return getDirectionOuMagasinById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDirectionOuMagasinById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDirectionOuMagasinById(params: GetDirectionOuMagasinById$Params, context?: HttpContext): Observable<DirectionOuMagasinDto> {
    return this.getDirectionOuMagasinById$Response(params, context).pipe(
      map((r: StrictHttpResponse<DirectionOuMagasinDto>): DirectionOuMagasinDto => r.body)
    );
  }

  /** Path part for operation `deleteDirectionOuMagasin()` */
  static readonly DeleteDirectionOuMagasinPath = '/direction-ou-magasins/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDirectionOuMagasin()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDirectionOuMagasin$Response(params: DeleteDirectionOuMagasin$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteDirectionOuMagasin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDirectionOuMagasin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDirectionOuMagasin(params: DeleteDirectionOuMagasin$Params, context?: HttpContext): Observable<void> {
    return this.deleteDirectionOuMagasin$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

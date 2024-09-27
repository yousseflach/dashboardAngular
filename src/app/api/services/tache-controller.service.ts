/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTache } from '../fn/tache-controller/create-tache';
import { CreateTache$Params } from '../fn/tache-controller/create-tache';
import { deleteTache } from '../fn/tache-controller/delete-tache';
import { DeleteTache$Params } from '../fn/tache-controller/delete-tache';
import { getAllTaches } from '../fn/tache-controller/get-all-taches';
import { GetAllTaches$Params } from '../fn/tache-controller/get-all-taches';
import { getTacheById } from '../fn/tache-controller/get-tache-by-id';
import { GetTacheById$Params } from '../fn/tache-controller/get-tache-by-id';
import { TacheDto } from '../models/tache-dto';

@Injectable({ providedIn: 'root' })
export class TacheControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllTaches()` */
  static readonly GetAllTachesPath = '/taches';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTaches()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTaches$Response(params?: GetAllTaches$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TacheDto>>> {
    return getAllTaches(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTaches$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTaches(params?: GetAllTaches$Params, context?: HttpContext): Observable<Array<TacheDto>> {
    return this.getAllTaches$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TacheDto>>): Array<TacheDto> => r.body)
    );
  }

  /** Path part for operation `createTache()` */
  static readonly CreateTachePath = '/taches';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTache()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTache$Response(params: CreateTache$Params, context?: HttpContext): Observable<StrictHttpResponse<TacheDto>> {
    return createTache(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTache$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTache(params: CreateTache$Params, context?: HttpContext): Observable<TacheDto> {
    return this.createTache$Response(params, context).pipe(
      map((r: StrictHttpResponse<TacheDto>): TacheDto => r.body)
    );
  }

  /** Path part for operation `getTacheById()` */
  static readonly GetTacheByIdPath = '/taches/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTacheById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTacheById$Response(params: GetTacheById$Params, context?: HttpContext): Observable<StrictHttpResponse<TacheDto>> {
    return getTacheById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTacheById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTacheById(params: GetTacheById$Params, context?: HttpContext): Observable<TacheDto> {
    return this.getTacheById$Response(params, context).pipe(
      map((r: StrictHttpResponse<TacheDto>): TacheDto => r.body)
    );
  }

  /** Path part for operation `deleteTache()` */
  static readonly DeleteTachePath = '/taches/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTache()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTache$Response(params: DeleteTache$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTache(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTache$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTache(params: DeleteTache$Params, context?: HttpContext): Observable<void> {
    return this.deleteTache$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

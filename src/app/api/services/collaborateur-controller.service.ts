/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollaborateurDto } from '../models/collaborateur-dto';
import { createCollaborateur } from '../fn/collaborateur-controller/create-collaborateur';
import { CreateCollaborateur$Params } from '../fn/collaborateur-controller/create-collaborateur';
import { deleteCollaborateur } from '../fn/collaborateur-controller/delete-collaborateur';
import { DeleteCollaborateur$Params } from '../fn/collaborateur-controller/delete-collaborateur';
import { getAllCollaborateurs } from '../fn/collaborateur-controller/get-all-collaborateurs';
import { GetAllCollaborateurs$Params } from '../fn/collaborateur-controller/get-all-collaborateurs';
import { getCollaborateurById } from '../fn/collaborateur-controller/get-collaborateur-by-id';
import { GetCollaborateurById$Params } from '../fn/collaborateur-controller/get-collaborateur-by-id';
import { request } from '../fn/collaborateur-controller/request';
import { Request$Params } from '../fn/collaborateur-controller/request';

@Injectable({ providedIn: 'root' })
export class CollaborateurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllCollaborateurs()` */
  static readonly GetAllCollaborateursPath = '/collaborateur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCollaborateurs()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCollaborateurs$Response(params: GetAllCollaborateurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CollaborateurDto>>> {
    return getAllCollaborateurs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCollaborateurs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCollaborateurs(params: GetAllCollaborateurs$Params, context?: HttpContext): Observable<Array<CollaborateurDto>> {
    return this.getAllCollaborateurs$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CollaborateurDto>>): Array<CollaborateurDto> => r.body)
    );
  }

  /** Path part for operation `createCollaborateur()` */
  static readonly CreateCollaborateurPath = '/collaborateur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCollaborateur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCollaborateur$Response(params: CreateCollaborateur$Params, context?: HttpContext): Observable<StrictHttpResponse<CollaborateurDto>> {
    return createCollaborateur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createCollaborateur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCollaborateur(params: CreateCollaborateur$Params, context?: HttpContext): Observable<CollaborateurDto> {
    return this.createCollaborateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollaborateurDto>): CollaborateurDto => r.body)
    );
  }

  /** Path part for operation `getCollaborateurById()` */
  static readonly GetCollaborateurByIdPath = '/collaborateur/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollaborateurById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollaborateurById$Response(params?: GetCollaborateurById$Params, context?: HttpContext): Observable<StrictHttpResponse<CollaborateurDto>> {
    return getCollaborateurById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollaborateurById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollaborateurById(params?: GetCollaborateurById$Params, context?: HttpContext): Observable<CollaborateurDto> {
    return this.getCollaborateurById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollaborateurDto>): CollaborateurDto => r.body)
    );
  }

  /** Path part for operation `deleteCollaborateur()` */
  static readonly DeleteCollaborateurPath = '/collaborateur/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCollaborateur()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCollaborateur$Response(params: DeleteCollaborateur$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCollaborateur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCollaborateur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCollaborateur(params: DeleteCollaborateur$Params, context?: HttpContext): Observable<void> {
    return this.deleteCollaborateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `request()` */
  static readonly RequestPath = '/collaborateur/request';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `request()` instead.
   *
   * This method doesn't expect any request body.
   */
  request$Response(params?: Request$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return request(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `request$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  request(params?: Request$Params, context?: HttpContext): Observable<string> {
    return this.request$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}

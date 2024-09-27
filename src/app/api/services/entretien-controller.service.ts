/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createInterview } from '../fn/entretien-controller/create-interview';
import { CreateInterview$Params } from '../fn/entretien-controller/create-interview';
import { deleteInterview } from '../fn/entretien-controller/delete-interview';
import { DeleteInterview$Params } from '../fn/entretien-controller/delete-interview';
import { EntretienDto } from '../models/entretien-dto';
import { getAllInterviews } from '../fn/entretien-controller/get-all-interviews';
import { GetAllInterviews$Params } from '../fn/entretien-controller/get-all-interviews';
import { getInterviewById } from '../fn/entretien-controller/get-interview-by-id';
import { GetInterviewById$Params } from '../fn/entretien-controller/get-interview-by-id';

@Injectable({ providedIn: 'root' })
export class EntretienControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllInterviews()` */
  static readonly GetAllInterviewsPath = '/entretiens';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllInterviews()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllInterviews$Response(params?: GetAllInterviews$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EntretienDto>>> {
    return getAllInterviews(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllInterviews$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllInterviews(params?: GetAllInterviews$Params, context?: HttpContext): Observable<Array<EntretienDto>> {
    return this.getAllInterviews$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EntretienDto>>): Array<EntretienDto> => r.body)
    );
  }

  /** Path part for operation `createInterview()` */
  static readonly CreateInterviewPath = '/entretiens';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createInterview()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createInterview$Response(params: CreateInterview$Params, context?: HttpContext): Observable<StrictHttpResponse<EntretienDto>> {
    return createInterview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createInterview$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createInterview(params: CreateInterview$Params, context?: HttpContext): Observable<EntretienDto> {
    return this.createInterview$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntretienDto>): EntretienDto => r.body)
    );
  }

  /** Path part for operation `getInterviewById()` */
  static readonly GetInterviewByIdPath = '/entretiens/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInterviewById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInterviewById$Response(params: GetInterviewById$Params, context?: HttpContext): Observable<StrictHttpResponse<EntretienDto>> {
    return getInterviewById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInterviewById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInterviewById(params: GetInterviewById$Params, context?: HttpContext): Observable<EntretienDto> {
    return this.getInterviewById$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntretienDto>): EntretienDto => r.body)
    );
  }

  /** Path part for operation `deleteInterview()` */
  static readonly DeleteInterviewPath = '/entretiens/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteInterview()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInterview$Response(params: DeleteInterview$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteInterview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteInterview$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInterview(params: DeleteInterview$Params, context?: HttpContext): Observable<void> {
    return this.deleteInterview$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

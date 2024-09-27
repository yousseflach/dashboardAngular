/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createStage } from '../fn/stage-controller/create-stage';
import { CreateStage$Params } from '../fn/stage-controller/create-stage';
import { deleteStage } from '../fn/stage-controller/delete-stage';
import { DeleteStage$Params } from '../fn/stage-controller/delete-stage';
import { getAllStages } from '../fn/stage-controller/get-all-stages';
import { GetAllStages$Params } from '../fn/stage-controller/get-all-stages';
import { getStageById } from '../fn/stage-controller/get-stage-by-id';
import { GetStageById$Params } from '../fn/stage-controller/get-stage-by-id';
import { StageDto } from '../models/stage-dto';

@Injectable({ providedIn: 'root' })
export class StageControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllStages()` */
  static readonly GetAllStagesPath = '/Stagiaire';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllStages()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllStages$Response(params?: GetAllStages$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StageDto>>> {
    return getAllStages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllStages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllStages(params?: GetAllStages$Params, context?: HttpContext): Observable<Array<StageDto>> {
    return this.getAllStages$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StageDto>>): Array<StageDto> => r.body)
    );
  }

  /** Path part for operation `createStage()` */
  static readonly CreateStagePath = '/Stagiaire';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createStage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createStage$Response(params: CreateStage$Params, context?: HttpContext): Observable<StrictHttpResponse<StageDto>> {
    return createStage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createStage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createStage(params: CreateStage$Params, context?: HttpContext): Observable<StageDto> {
    return this.createStage$Response(params, context).pipe(
      map((r: StrictHttpResponse<StageDto>): StageDto => r.body)
    );
  }

  /** Path part for operation `getStageById()` */
  static readonly GetStageByIdPath = '/Stagiaire/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStageById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStageById$Response(params: GetStageById$Params, context?: HttpContext): Observable<StrictHttpResponse<StageDto>> {
    return getStageById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStageById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStageById(params: GetStageById$Params, context?: HttpContext): Observable<StageDto> {
    return this.getStageById$Response(params, context).pipe(
      map((r: StrictHttpResponse<StageDto>): StageDto => r.body)
    );
  }

  /** Path part for operation `deleteStage()` */
  static readonly DeleteStagePath = '/Stagiaire/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteStage()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteStage$Response(params: DeleteStage$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteStage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteStage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteStage(params: DeleteStage$Params, context?: HttpContext): Observable<void> {
    return this.deleteStage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Candidat } from '../models/candidat';
import { deleteCandidate } from '../fn/candidate-controller/delete-candidate';
import { DeleteCandidate$Params } from '../fn/candidate-controller/delete-candidate';
import { uploadCandidat } from '../fn/candidate-controller/upload-candidat';
import { UploadCandidat$Params } from '../fn/candidate-controller/upload-candidat';

@Injectable({ providedIn: 'root' })
export class CandidateControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `uploadCandidat()` */
  static readonly UploadCandidatPath = '/candidates/upload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadCandidat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadCandidat$Response(params: UploadCandidat$Params, context?: HttpContext): Observable<StrictHttpResponse<Candidat>> {
    return uploadCandidat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadCandidat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadCandidat(params: UploadCandidat$Params, context?: HttpContext): Observable<Candidat> {
    return this.uploadCandidat$Response(params, context).pipe(
      map((r: StrictHttpResponse<Candidat>): Candidat => r.body)
    );
  }

  /** Path part for operation `deleteCandidate()` */
  static readonly DeleteCandidatePath = '/candidates/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCandidate()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCandidate$Response(params: DeleteCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCandidate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCandidate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCandidate(params: DeleteCandidate$Params, context?: HttpContext): Observable<void> {
    return this.deleteCandidate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

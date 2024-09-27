/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticate } from '../fn/utilisateur-controller/authenticate';
import { Authenticate$Params } from '../fn/utilisateur-controller/authenticate';
import { getAllUsers } from '../fn/utilisateur-controller/get-all-users';
import { GetAllUsers$Params } from '../fn/utilisateur-controller/get-all-users';
import { getdemandeur } from '../fn/utilisateur-controller/getdemandeur';
import { Getdemandeur$Params } from '../fn/utilisateur-controller/getdemandeur';
import { getNomPrenomMatricule } from '../fn/utilisateur-controller/get-nom-prenom-matricule';
import { GetNomPrenomMatricule$Params } from '../fn/utilisateur-controller/get-nom-prenom-matricule';
import { getUo } from '../fn/utilisateur-controller/get-uo';
import { GetUo$Params } from '../fn/utilisateur-controller/get-uo';
import { NomPrenomMatricule } from '../models/nom-prenom-matricule';
import { UtilisateurDto } from '../models/utilisateur-dto';

@Injectable({ providedIn: 'root' })
export class UtilisateurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authenticate()` */
  static readonly AuthenticatePath = '/login/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method doesn't expect any request body.
   */
  authenticate$Response(params: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return authenticate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authenticate(params: Authenticate$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.authenticate$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `getAllUsers()` */
  static readonly GetAllUsersPath = '/login/save-all-users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers$Response(params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getAllUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers(params?: GetAllUsers$Params, context?: HttpContext): Observable<string> {
    return this.getAllUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getNomPrenomMatricule()` */
  static readonly GetNomPrenomMatriculePath = '/login/demandeur/liste_nom_prenom_matricule';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNomPrenomMatricule()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNomPrenomMatricule$Response(params: GetNomPrenomMatricule$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NomPrenomMatricule>>> {
    return getNomPrenomMatricule(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNomPrenomMatricule$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNomPrenomMatricule(params: GetNomPrenomMatricule$Params, context?: HttpContext): Observable<Array<NomPrenomMatricule>> {
    return this.getNomPrenomMatricule$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NomPrenomMatricule>>): Array<NomPrenomMatricule> => r.body)
    );
  }

  /** Path part for operation `getUo()` */
  static readonly GetUoPath = '/login/demandeur/listeUo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUo$Response(params: GetUo$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
    return getUo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUo(params: GetUo$Params, context?: HttpContext): Observable<Array<string>> {
    return this.getUo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<string>>): Array<string> => r.body)
    );
  }

  /** Path part for operation `getdemandeur()` */
  static readonly GetdemandeurPath = '/login/Demandeur/{matricule}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getdemandeur()` instead.
   *
   * This method doesn't expect any request body.
   */
  getdemandeur$Response(params: Getdemandeur$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return getdemandeur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getdemandeur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getdemandeur(params: Getdemandeur$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.getdemandeur$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

}

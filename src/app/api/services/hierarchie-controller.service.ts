/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Collaborateur } from '../models/collaborateur';
import { demandeestvalide } from '../fn/hierarchie-controller/demandeestvalide';
import { Demandeestvalide$Params } from '../fn/hierarchie-controller/demandeestvalide';
import { getAllDemandes } from '../fn/hierarchie-controller/get-all-demandes';
import { GetAllDemandes$Params } from '../fn/hierarchie-controller/get-all-demandes';
import { getAllHierarchies } from '../fn/hierarchie-controller/get-all-hierarchies';
import { GetAllHierarchies$Params } from '../fn/hierarchie-controller/get-all-hierarchies';
import { getdemandes } from '../fn/hierarchie-controller/getdemandes';
import { Getdemandes$Params } from '../fn/hierarchie-controller/getdemandes';
import { getHierarchieByDemandeId } from '../fn/hierarchie-controller/get-hierarchie-by-demande-id';
import { GetHierarchieByDemandeId$Params } from '../fn/hierarchie-controller/get-hierarchie-by-demande-id';
import { getHierarchieById } from '../fn/hierarchie-controller/get-hierarchie-by-id';
import { GetHierarchieById$Params } from '../fn/hierarchie-controller/get-hierarchie-by-id';
import { HierarchieDto } from '../models/hierarchie-dto';
import { refuserdemande } from '../fn/hierarchie-controller/refuserdemande';
import { Refuserdemande$Params } from '../fn/hierarchie-controller/refuserdemande';
import { validerdemande } from '../fn/hierarchie-controller/validerdemande';
import { Validerdemande$Params } from '../fn/hierarchie-controller/validerdemande';

@Injectable({ providedIn: 'root' })
export class HierarchieControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `validerdemande()` */
  static readonly ValiderdemandePath = '/hierarchies/valider/{id}/{matricule}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validerdemande()` instead.
   *
   * This method doesn't expect any request body.
   */
  validerdemande$Response(params: Validerdemande$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return validerdemande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `validerdemande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  validerdemande(params: Validerdemande$Params, context?: HttpContext): Observable<boolean> {
    return this.validerdemande$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `refuserdemande()` */
  static readonly RefuserdemandePath = '/hierarchies/refuser/{id}/{matricule}/{commentaire}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refuserdemande()` instead.
   *
   * This method doesn't expect any request body.
   */
  refuserdemande$Response(params: Refuserdemande$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return refuserdemande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refuserdemande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  refuserdemande(params: Refuserdemande$Params, context?: HttpContext): Observable<boolean> {
    return this.refuserdemande$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getAllHierarchies()` */
  static readonly GetAllHierarchiesPath = '/hierarchies';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllHierarchies()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllHierarchies$Response(params?: GetAllHierarchies$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HierarchieDto>>> {
    return getAllHierarchies(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllHierarchies$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllHierarchies(params?: GetAllHierarchies$Params, context?: HttpContext): Observable<Array<HierarchieDto>> {
    return this.getAllHierarchies$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HierarchieDto>>): Array<HierarchieDto> => r.body)
    );
  }

  /** Path part for operation `getHierarchieById()` */
  static readonly GetHierarchieByIdPath = '/hierarchies/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHierarchieById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHierarchieById$Response(params: GetHierarchieById$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HierarchieDto>>> {
    return getHierarchieById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHierarchieById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHierarchieById(params: GetHierarchieById$Params, context?: HttpContext): Observable<Array<HierarchieDto>> {
    return this.getHierarchieById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HierarchieDto>>): Array<HierarchieDto> => r.body)
    );
  }

  /** Path part for operation `getdemandes()` */
  static readonly GetdemandesPath = '/hierarchies/demandes/{matricule}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getdemandes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getdemandes$Response(params: Getdemandes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaborateur>>> {
    return getdemandes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getdemandes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getdemandes(params: Getdemandes$Params, context?: HttpContext): Observable<Array<Collaborateur>> {
    return this.getdemandes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Collaborateur>>): Array<Collaborateur> => r.body)
    );
  }

  /** Path part for operation `getHierarchieByDemandeId()` */
  static readonly GetHierarchieByDemandeIdPath = '/hierarchies/Hierarchie/{demandeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHierarchieByDemandeId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHierarchieByDemandeId$Response(params: GetHierarchieByDemandeId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HierarchieDto>>> {
    return getHierarchieByDemandeId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHierarchieByDemandeId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHierarchieByDemandeId(params: GetHierarchieByDemandeId$Params, context?: HttpContext): Observable<Array<HierarchieDto>> {
    return this.getHierarchieByDemandeId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HierarchieDto>>): Array<HierarchieDto> => r.body)
    );
  }

  /** Path part for operation `demandeestvalide()` */
  static readonly DemandeestvalidePath = '/hierarchies/Hierarchie/demandeestvalide';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `demandeestvalide()` instead.
   *
   * This method doesn't expect any request body.
   */
  demandeestvalide$Response(params: Demandeestvalide$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return demandeestvalide(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `demandeestvalide$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  demandeestvalide(params: Demandeestvalide$Params, context?: HttpContext): Observable<boolean> {
    return this.demandeestvalide$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `getAllDemandes()` */
  static readonly GetAllDemandesPath = '/hierarchies/Hierarchie/allDemandes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDemandes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDemandes$Response(params?: GetAllDemandes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Collaborateur>>> {
    return getAllDemandes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllDemandes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDemandes(params?: GetAllDemandes$Params, context?: HttpContext): Observable<Array<Collaborateur>> {
    return this.getAllDemandes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Collaborateur>>): Array<Collaborateur> => r.body)
    );
  }

}

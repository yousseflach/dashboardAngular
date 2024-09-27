/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { TacheControllerService } from './services/tache-controller.service';
import { NotificationControllerService } from './services/notification-controller.service';
import { UtilisateurControllerService } from './services/utilisateur-controller.service';
import { HierarchieControllerService } from './services/hierarchie-controller.service';
import { EntretienControllerService } from './services/entretien-controller.service';
import { DirectionOuMagasinControllerService } from './services/direction-ou-magasin-controller.service';
import { CollaborateurControllerService } from './services/collaborateur-controller.service';
import { CandidateControllerService } from './services/candidate-controller.service';
import { StageControllerService } from './services/stage-controller.service';
import { ListSocieteControllerService } from './services/list-societe-controller.service';
import { UserControllerService } from './services/user-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    TacheControllerService,
    NotificationControllerService,
    UtilisateurControllerService,
    HierarchieControllerService,
    EntretienControllerService,
    DirectionOuMagasinControllerService,
    CollaborateurControllerService,
    CandidateControllerService,
    StageControllerService,
    ListSocieteControllerService,
    UserControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createNotification } from '../fn/notification-controller/create-notification';
import { CreateNotification$Params } from '../fn/notification-controller/create-notification';
import { deleteNotification } from '../fn/notification-controller/delete-notification';
import { DeleteNotification$Params } from '../fn/notification-controller/delete-notification';
import { getAllNotifications } from '../fn/notification-controller/get-all-notifications';
import { GetAllNotifications$Params } from '../fn/notification-controller/get-all-notifications';
import { getNotificationById } from '../fn/notification-controller/get-notification-by-id';
import { GetNotificationById$Params } from '../fn/notification-controller/get-notification-by-id';
import { NotificationDto } from '../models/notification-dto';

@Injectable({ providedIn: 'root' })
export class NotificationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllNotifications()` */
  static readonly GetAllNotificationsPath = '/notifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllNotifications$Response(params?: GetAllNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NotificationDto>>> {
    return getAllNotifications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllNotifications(params?: GetAllNotifications$Params, context?: HttpContext): Observable<Array<NotificationDto>> {
    return this.getAllNotifications$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NotificationDto>>): Array<NotificationDto> => r.body)
    );
  }

  /** Path part for operation `createNotification()` */
  static readonly CreateNotificationPath = '/notifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createNotification()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNotification$Response(params: CreateNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDto>> {
    return createNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createNotification$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNotification(params: CreateNotification$Params, context?: HttpContext): Observable<NotificationDto> {
    return this.createNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationDto>): NotificationDto => r.body)
    );
  }

  /** Path part for operation `getNotificationById()` */
  static readonly GetNotificationByIdPath = '/notifications/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNotificationById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationById$Response(params: GetNotificationById$Params, context?: HttpContext): Observable<StrictHttpResponse<NotificationDto>> {
    return getNotificationById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNotificationById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotificationById(params: GetNotificationById$Params, context?: HttpContext): Observable<NotificationDto> {
    return this.getNotificationById$Response(params, context).pipe(
      map((r: StrictHttpResponse<NotificationDto>): NotificationDto => r.body)
    );
  }

  /** Path part for operation `deleteNotification()` */
  static readonly DeleteNotificationPath = '/notifications/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteNotification()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotification$Response(params: DeleteNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteNotification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNotification(params: DeleteNotification$Params, context?: HttpContext): Observable<void> {
    return this.deleteNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

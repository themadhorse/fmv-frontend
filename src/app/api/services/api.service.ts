/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { rootGet } from '../fn/operations/root-get';
import { RootGet$Params } from '../fn/operations/root-get';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `rootGet()` */
  static readonly RootGetPath = '/';

  /**
   * Root.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rootGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  rootGet$Response(params?: RootGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: string;
}>> {
    return rootGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Root.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rootGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rootGet(params?: RootGet$Params, context?: HttpContext): Observable<{
[key: string]: string;
}> {
    return this.rootGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: string;
}>): {
[key: string]: string;
} => r.body)
    );
  }

}

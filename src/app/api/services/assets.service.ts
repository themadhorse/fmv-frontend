/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AssetDailyData } from '../models/asset-daily-data';
import { AssetQuote } from '../models/asset-quote';
import { getAssetInfoAssetsGet } from '../fn/assets/get-asset-info-assets-get';
import { GetAssetInfoAssetsGet$Params } from '../fn/assets/get-asset-info-assets-get';
import { getAssetQuoteAssetsQuoteGet } from '../fn/assets/get-asset-quote-assets-quote-get';
import { GetAssetQuoteAssetsQuoteGet$Params } from '../fn/assets/get-asset-quote-assets-quote-get';

@Injectable({ providedIn: 'root' })
export class AssetsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAssetInfoAssetsGet()` */
  static readonly GetAssetInfoAssetsGetPath = '/assets';

  /**
   * Get Asset Info.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAssetInfoAssetsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssetInfoAssetsGet$Response(params: GetAssetInfoAssetsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<AssetDailyData>> {
    return getAssetInfoAssetsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Asset Info.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAssetInfoAssetsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssetInfoAssetsGet(params: GetAssetInfoAssetsGet$Params, context?: HttpContext): Observable<AssetDailyData> {
    return this.getAssetInfoAssetsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AssetDailyData>): AssetDailyData => r.body)
    );
  }

  /** Path part for operation `getAssetQuoteAssetsQuoteGet()` */
  static readonly GetAssetQuoteAssetsQuoteGetPath = '/assets/quote';

  /**
   * Get Asset Quote.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAssetQuoteAssetsQuoteGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssetQuoteAssetsQuoteGet$Response(params: GetAssetQuoteAssetsQuoteGet$Params, context?: HttpContext): Observable<StrictHttpResponse<AssetQuote>> {
    return getAssetQuoteAssetsQuoteGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Asset Quote.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAssetQuoteAssetsQuoteGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssetQuoteAssetsQuoteGet(params: GetAssetQuoteAssetsQuoteGet$Params, context?: HttpContext): Observable<AssetQuote> {
    return this.getAssetQuoteAssetsQuoteGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AssetQuote>): AssetQuote => r.body)
    );
  }

}

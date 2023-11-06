/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AssetQuote } from '../../models/asset-quote';

export interface GetAssetQuoteAssetsQuoteGet$Params {
  asset_symbol: string;
}

export function getAssetQuoteAssetsQuoteGet(http: HttpClient, rootUrl: string, params: GetAssetQuoteAssetsQuoteGet$Params, context?: HttpContext): Observable<StrictHttpResponse<AssetQuote>> {
  const rb = new RequestBuilder(rootUrl, getAssetQuoteAssetsQuoteGet.PATH, 'get');
  if (params) {
    rb.query('asset_symbol', params.asset_symbol, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AssetQuote>;
    })
  );
}

getAssetQuoteAssetsQuoteGet.PATH = '/assets/quote';

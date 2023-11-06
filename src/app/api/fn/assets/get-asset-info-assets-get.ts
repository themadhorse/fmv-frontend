/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AssetDailyData } from '../../models/asset-daily-data';

export interface GetAssetInfoAssetsGet$Params {
  asset_symbol_str: string;
}

export function getAssetInfoAssetsGet(http: HttpClient, rootUrl: string, params: GetAssetInfoAssetsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<AssetDailyData>> {
  const rb = new RequestBuilder(rootUrl, getAssetInfoAssetsGet.PATH, 'get');
  if (params) {
    rb.query('asset_symbol_str', params.asset_symbol_str, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AssetDailyData>;
    })
  );
}

getAssetInfoAssetsGet.PATH = '/assets';

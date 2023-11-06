/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Asset } from '../../models/asset';

export interface RemoveAssetsFromUserUsersPortfolioDelete$Params {
  uid: string;
      body: Array<Asset>
}

export function removeAssetsFromUserUsersPortfolioDelete(http: HttpClient, rootUrl: string, params: RemoveAssetsFromUserUsersPortfolioDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Asset>>> {
  const rb = new RequestBuilder(rootUrl, removeAssetsFromUserUsersPortfolioDelete.PATH, 'delete');
  if (params) {
    rb.query('uid', params.uid, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Asset>>;
    })
  );
}

removeAssetsFromUserUsersPortfolioDelete.PATH = '/users/portfolio';

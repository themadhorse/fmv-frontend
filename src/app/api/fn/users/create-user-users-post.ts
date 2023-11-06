/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserModel } from '../../models/user-model';

export interface CreateUserUsersPost$Params {
      body: UserModel
}

export function createUserUsersPost(http: HttpClient, rootUrl: string, params: CreateUserUsersPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UserModel>> {
  const rb = new RequestBuilder(rootUrl, createUserUsersPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserModel>;
    })
  );
}

createUserUsersPost.PATH = '/users';

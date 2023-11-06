/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addAssetsToUserUsersPortfolioPatch } from '../fn/users/add-assets-to-user-users-portfolio-patch';
import { AddAssetsToUserUsersPortfolioPatch$Params } from '../fn/users/add-assets-to-user-users-portfolio-patch';
import { Asset } from '../models/asset';
import { createUserUsersPost } from '../fn/users/create-user-users-post';
import { CreateUserUsersPost$Params } from '../fn/users/create-user-users-post';
import { deleteUserUsersDelete } from '../fn/users/delete-user-users-delete';
import { DeleteUserUsersDelete$Params } from '../fn/users/delete-user-users-delete';
import { getUserUsersGet } from '../fn/users/get-user-users-get';
import { GetUserUsersGet$Params } from '../fn/users/get-user-users-get';
import { removeAssetsFromUserUsersPortfolioDelete } from '../fn/users/remove-assets-from-user-users-portfolio-delete';
import { RemoveAssetsFromUserUsersPortfolioDelete$Params } from '../fn/users/remove-assets-from-user-users-portfolio-delete';
import { UserModel } from '../models/user-model';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUserUsersGet()` */
  static readonly GetUserUsersGetPath = '/users';

  /**
   * Get User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserUsersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserUsersGet$Response(params: GetUserUsersGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UserModel>> {
    return getUserUsersGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserUsersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserUsersGet(params: GetUserUsersGet$Params, context?: HttpContext): Observable<UserModel> {
    return this.getUserUsersGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserModel>): UserModel => r.body)
    );
  }

  /** Path part for operation `createUserUsersPost()` */
  static readonly CreateUserUsersPostPath = '/users';

  /**
   * Create User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUserUsersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUserUsersPost$Response(params: CreateUserUsersPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UserModel>> {
    return createUserUsersPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Create User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUserUsersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUserUsersPost(params: CreateUserUsersPost$Params, context?: HttpContext): Observable<UserModel> {
    return this.createUserUsersPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserModel>): UserModel => r.body)
    );
  }

  /** Path part for operation `deleteUserUsersDelete()` */
  static readonly DeleteUserUsersDeletePath = '/users';

  /**
   * Delete User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserUsersDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserUsersDelete$Response(params: DeleteUserUsersDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUserUsersDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserUsersDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserUsersDelete(params: DeleteUserUsersDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteUserUsersDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `removeAssetsFromUserUsersPortfolioDelete()` */
  static readonly RemoveAssetsFromUserUsersPortfolioDeletePath = '/users/portfolio';

  /**
   * Remove Assets From User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeAssetsFromUserUsersPortfolioDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  removeAssetsFromUserUsersPortfolioDelete$Response(params: RemoveAssetsFromUserUsersPortfolioDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Asset>>> {
    return removeAssetsFromUserUsersPortfolioDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Remove Assets From User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeAssetsFromUserUsersPortfolioDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  removeAssetsFromUserUsersPortfolioDelete(params: RemoveAssetsFromUserUsersPortfolioDelete$Params, context?: HttpContext): Observable<Array<Asset>> {
    return this.removeAssetsFromUserUsersPortfolioDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Asset>>): Array<Asset> => r.body)
    );
  }

  /** Path part for operation `addAssetsToUserUsersPortfolioPatch()` */
  static readonly AddAssetsToUserUsersPortfolioPatchPath = '/users/portfolio';

  /**
   * Add Assets To User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAssetsToUserUsersPortfolioPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAssetsToUserUsersPortfolioPatch$Response(params: AddAssetsToUserUsersPortfolioPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Asset>>> {
    return addAssetsToUserUsersPortfolioPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * Add Assets To User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addAssetsToUserUsersPortfolioPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAssetsToUserUsersPortfolioPatch(params: AddAssetsToUserUsersPortfolioPatch$Params, context?: HttpContext): Observable<Array<Asset>> {
    return this.addAssetsToUserUsersPortfolioPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Asset>>): Array<Asset> => r.body)
    );
  }

}

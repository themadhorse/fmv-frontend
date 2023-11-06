/* tslint:disable */
/* eslint-disable */
import { Asset } from '../models/asset';
export interface UserModel {
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;

  /**
   * List of stocks in user's portfolio
   */
  portfolio?: Array<Asset>;
  uid?: string;
}

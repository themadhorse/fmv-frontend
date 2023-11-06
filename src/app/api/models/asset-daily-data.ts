/* tslint:disable */
/* eslint-disable */
import { Metadata } from '../models/metadata';
import { TimeSeries } from '../models/time-series';
export interface AssetDailyData {
  metadata: Metadata;
  time_series: {
[key: string]: TimeSeries;
};
}

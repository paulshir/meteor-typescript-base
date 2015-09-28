/// <reference path="../../../typings/tsd.d.ts" />

import * as contract from '../contract/exports'
import collections from '../collection/exports'
import * as counter from './counter'
export * from './counter'

export default class __datasources {
	public static counterDataSource: counter.ICounterDataSource;
	
	public static InitializeDataSources() {
		if (!__datasources.counterDataSource) {
			__datasources.counterDataSource = counter.CounterDataSource.getInstance();
		}
	}
}
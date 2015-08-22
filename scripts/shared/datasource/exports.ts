/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../contract/common.ts" />
/// <reference path="../contract/counter.ts" />

/// <reference path="../collections/exports.ts" />

/// <reference path="common.ts" />
/// <reference path="counter.ts" />

namespace _mtb.shared.datasource {
	
	export function InitializeDataSources(): void {
		InitializeCounterDataSource(collections.counterCollection);
	}
}
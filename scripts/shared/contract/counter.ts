/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="common.ts" />

namespace _mtb.shared.contract {
	export const Counter = {
		COLLECTION_NAME: "counters",
		PUBLISH_NAME: "counters"
	}
	
	export interface ICounter extends IDatabaseEntry {
		name: string;
		value: number;
	}
}
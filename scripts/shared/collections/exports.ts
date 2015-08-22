/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../contract/common.ts" />
/// <reference path="../contract/counter.ts" />

/// <reference path="common.ts" />

namespace _mtb.shared.collections {
	export var counterCollection: DenyAllCollection<contract.ICounter>;
	
	export function InitializeCollections(): void {
		counterCollection || (counterCollection = CreateDenyAllCollection<contract.ICounter>(_mtb.shared.contract.Counter.COLLECTION_NAME));
	}
}
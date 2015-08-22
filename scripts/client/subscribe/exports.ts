/// <reference path="../imports.d.ts" />
/// <reference path="common.ts" />

namespace _mtb.client.subscribe {	
	export var counterSubscriber: SubscriberBase<_mtb.shared.contract.ICounter>;
	
	export function SubscribeAll() {
		if (!counterSubscriber) {
			counterSubscriber = new SubscriberBase<_mtb.shared.contract.ICounter>(mtb.shared.contract.Counter.PUBLISH_NAME);
			counterSubscriber.Subscribe();
		}
	}
}
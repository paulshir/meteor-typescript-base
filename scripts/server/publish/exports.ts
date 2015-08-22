/// <reference path="../imports.d.ts" />
/// <reference path="common.ts" />

namespace _mtb.server.publish {
	export var counterPublisher: PublisherBase<_mtb.shared.contract.ICounter>;
	
	export function PublishAll() {
		if (!counterPublisher) {
			counterPublisher = new PublisherBase<_mtb.shared.contract.ICounter>(mtb.shared.contract.Counter.PUBLISH_NAME, mtb.shared.collections.counterCollection);
			counterPublisher.Publish();
		}
	}
}
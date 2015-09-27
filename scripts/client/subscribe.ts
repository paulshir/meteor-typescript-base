/// <reference path="../../typings/tsd.d.ts" />

import * as shared from '../shared/shared'

export class SubscriberBase<T extends shared.contract.IDatabaseEntry> {
	private subscribeTo: string;
	
	constructor(subscribeTo: string) {
		this.subscribeTo = subscribeTo;
	}
	
	public Subscribe(): void {
		Meteor.subscribe(this.subscribeTo);
	}
}

export var counterSubscriber: SubscriberBase<shared.contract.ICounter>;
	
export function SubscribeAll() {
	if (!counterSubscriber) {
		counterSubscriber = new SubscriberBase<shared.contract.ICounter>(shared.contract.Counter.PUBLISH_NAME);
		counterSubscriber.Subscribe();
	}
}
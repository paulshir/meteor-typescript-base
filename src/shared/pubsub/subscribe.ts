/// <reference path="../../../typings/tsd.d.ts" />

import * as contract from '../contract/exports'

export class SubscriberBase<T extends contract.IDatabaseEntry> {
	private subscribeTo: string;
	
	constructor(subscribeTo: string) {
		this.subscribeTo = subscribeTo;
	}
	
	public Subscribe(): void {
		Meteor.subscribe(this.subscribeTo);
	}
}

export var counterSubscriber: SubscriberBase<contract.ICounter>;
	
export function SubscribeAll() {
	if (!counterSubscriber) {
		counterSubscriber = new SubscriberBase<contract.ICounter>(contract.Counter.PUBLISH_NAME);
		counterSubscriber.Subscribe();
	}
}
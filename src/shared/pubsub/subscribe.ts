import * as contract from '../contract/exports'

export class SubscriberBase<T extends contract.IDatabaseEntry> {
	private subscribeTo: string;
	
	constructor(subscribeTo: string) {
		this.subscribeTo = subscribeTo;
	}
	
	public Subscribe(): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			var a = Meteor.subscribe(this.subscribeTo, <any>{
				onReady: () => { resolve(); }
			});
		});
	}
}

export var counterSubscriber: SubscriberBase<contract.ICounter>;
	
export function SubscribeAll(): Promise<any> {
	var promises: Array<Promise<any>> = [];
		
	if (!counterSubscriber) {
		counterSubscriber = new SubscriberBase<contract.ICounter>(contract.Counter.PUBLISH_NAME);
		promises.push(counterSubscriber.Subscribe());
	}
	
	return Promise.all<any>(promises);
}
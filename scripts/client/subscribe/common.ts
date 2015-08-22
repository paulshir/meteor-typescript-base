/// <reference path="../imports.d.ts" />

namespace _mtb.client.subscribe {	
	export class SubscriberBase<T extends _mtb.shared.contract.IDatabaseEntry> {
		private subscribeTo: string;
		
		constructor(subscribeTo: string) {
			this.subscribeTo = subscribeTo;
		}
		
		public Subscribe(): void {
			Meteor.subscribe(this.subscribeTo);
		}
	}
}
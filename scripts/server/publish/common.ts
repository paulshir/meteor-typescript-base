/// <reference path="../imports.d.ts" />

namespace _mtb.server.publish {
	interface PublishContext {
		userId: string;
	}
	
	export class PublisherBase<T extends _mtb.shared.contract.IDatabaseEntry> {
		private publishAs: string;
		private collection: Mongo.Collection<T>;
		
		constructor(publishAs: string, collection: Mongo.Collection<T>) {
			this.publishAs = publishAs;
			this.collection = collection;
		}
		
		public Publish(): void {
			// The publish function has a different context simiar to the Subscription context. Using function() instead of arrow
			// functions to be able to access the context of this as the publish context. 
			var _this = this;
			Meteor.publish(this.publishAs, function() {
				var publishContext = <PublishContext><any>this;
				return _this.collection.find(<Mongo.Selector>{ userId: publishContext.userId });
			});
		}
	}
}
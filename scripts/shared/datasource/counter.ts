/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../contract/common.ts" />
/// <reference path="../contract/counter.ts" />
/// <reference path="../collections/common.ts" />
/// <reference path="../validation/counter.ts" />

/// <reference path="common.ts" />

namespace _mtb.shared.datasource {
	export interface ICounterDataSource {
		newCounter(name: string, callback?: MeteorCallCallback<Mongo.ObjectID>): void;
		incrementCounter(id: string, callback?: MeteorCallCallback<any>): void;
		removeCounter(id: string, callback?: MeteorCallCallback<any>): void;
	}
	
	const MethodCalls = {
		insert: "insert",
		increment: "increment",
		remove: "remove"
	}
	
	class CounterDataSource extends DataSourceBase<contract.ICounter> implements ICounterDataSource {
		constructor(collection: collections.DenyAllCollection<contract.ICounter>) {
			super("counter", collection)
			
			var methods: any = {};
			methods[MethodCalls.insert] = this.getInsertMethod();
			methods[MethodCalls.increment] = this.getIncrementMethod();
			methods[MethodCalls.remove] = this.getRemoveMethod();
			
			this.methods(methods);
		}
		
		public newCounter(name: string, callback?: MeteorCallCallback<Mongo.ObjectID>): void {
			this.call(MethodCalls.insert, name, callback);
		}
		
		public incrementCounter(id: string, callback?: MeteorCallCallback<any>): void {
			this.call(MethodCalls.increment, id, callback);
		}
		
		public removeCounter(id: string, callback?: MeteorCallCallback<any>): void {
			this.call(MethodCalls.remove, id, callback);
		}
		
		private getInsertMethod(): (name: string) => Mongo.ObjectID {
			var collection = this.collection;
			return function(name: string): Mongo.ObjectID {
				var err = validation.ValidateUserLoggedIn();
				
				if (!err) {
					err = validation.ValidateNewCounter(name);
				}
				
				if (err) {
					throw new Meteor.Error(err);
				}
				
				var counter = <contract.ICounter> { 
					name: name,
					userId: Meteor.userId(),
					createdUtc: new Date(),
					updatedUtc: new Date(),
					value: 0
				};
				
				return collection.insert(counter);
			}
		}
		
		private getIncrementMethod(): (id: string) => void {
			var collection = this.collection;
			return function(id: string): void {
				var err = validation.ValidateUserLoggedInAndModifyAllowed(collection, id);
				if (err) {
					throw new Meteor.Error(err);
				}
				
				var modifier = <Mongo.Modifier> {
					$inc: { value: 1 },
					$set: { updatedUtc: new Date() }
				};
				
				collection.update(id, modifier);
			}
		}
		
		private getRemoveMethod(): (id: string) => void {
			var collection = this.collection;
			return function(id: string): void {
				var err = validation.ValidateUserLoggedInAndModifyAllowed(collection, id);
				if (err) {
					throw new Meteor.Error(err);
				}
				
				collection.remove(id);
			}
		}
	}
	
	export var counterDataSource: ICounterDataSource;
	export function InitializeCounterDataSource(collection: collections.DenyAllCollection<contract.ICounter>) {
		if (!counterDataSource) {
			counterDataSource = new CounterDataSource(collection);
		}
	}
}
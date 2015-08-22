/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../contract/common.ts" />
/// <reference path="../validation/common.ts" />

namespace _mtb.shared.datasource {
	export interface MeteorCallCallback<T> {
		(err?: Meteor.Error, result?: T): void;
	}
	
	export class DataSourceBase<T extends contract.IDatabaseEntry> {
		private methodPrefix: string;
		protected collection: Mongo.Collection<T>;
		
		constructor(methodPrefix: string, collection: Mongo.Collection<T>) {			
			this.methodPrefix = methodPrefix;
			this.collection = collection;
		}
		
		protected methods(methods: any) {
			if (_.isNull(methods) || _.isUndefined(methods)) {
				return;
			}
			
			var newMethods: any = {};
			for (var methodName in methods) {
				newMethods[this.getMethodName(methodName)] = methods[methodName];
			}
			
			Meteor.methods(newMethods);
		}
		
		protected call(methodName: string, ...args: any[]) {
			Meteor.call(this.getMethodName(methodName), ...args);
		}	
		
		public find(): Mongo.Cursor<T> {
			return <Mongo.Cursor<T>>this.collection.find();
		}
		
		public findOne(): T {
			return <T>this.collection.findOne();
		}
		
		private getMethodName(method: string) {
			return this.methodPrefix + "DS" + method;
		}
	}
}
import * as contract from '../contract/common'

export interface MeteorCallCallback<T> {
	(err?: Meteor.Error, result?: T): void;
}

export function meteorCall(staticInstance: any) {
	return (target: any, propertyKey: string, descriptor?: TypedPropertyDescriptor<any>) => {
		var originalMethod = descriptor.value;
		
		if (target.meteorCallMethods === undefined) {
			target.meteorCallMethods = {};
		}
		
		target.meteorCallMethods[propertyKey] = function(...args: any[]) {
			staticInstance.instance.meteorCallContext = this;
			originalMethod.apply(staticInstance.instance, args);
		}
		
		descriptor.value = function(...args: any[]) {
			args.unshift(propertyKey);
			return target.call.apply(this, args);
		}
		
		return descriptor;
	}
}

export class DataSourceBase<T extends contract.IDatabaseEntry> {
	private methodPrefix: string;
	protected collection: Mongo.Collection<T>;
	
	// Properties for meteor call decorator
	private instance: DataSourceBase<T>;
	protected meteorCallMethods: any;
	protected meteorCallContext: any;
	
	constructor(methodPrefix: string, collection: Mongo.Collection<T>) {			
		this.methodPrefix = methodPrefix;
		this.collection = collection;
	}
	
	protected methods(instance: DataSourceBase<T>, methods: any) {
		if (instance === undefined || instance === null) {
			throw new Error("Instance Must be defined.")
		}
		
		if (!(instance instanceof DataSourceBase)) {
			throw new Error("Instance must extend DataSourceBase<T>.")
		}
		
		if (_.isNull(methods) || _.isUndefined(methods)) {
			return;
		}
		
		var newMethods: any = {};
		for (var methodName in methods) {
			newMethods[this.getMethodName(methodName)] = methods[methodName];
		}
		
		this.instance = this;
		Meteor.methods(newMethods);
	}
	
	private call(methodName: string, ...args: any[]) {
		Meteor.call(this.getMethodName(methodName), ...args);
	}
	
	private getMethodName(method: string) {
		return this.methodPrefix + "DS" + method;
	}
}
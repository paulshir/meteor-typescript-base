/// <reference path="../../../typings/tsd.d.ts" />

import * as contract from '../contract/exports'
import * as validation from '../validation/exports'
import collections from '../collection/exports'

import * as base from './common'


export interface ICounterDataSource {
	newCounter(name: string, callback?: base.MeteorCallCallback<Mongo.ObjectID>): Mongo.ObjectID;
	incrementCounter(id: string, callback?: base.MeteorCallCallback<any>): void;
	removeCounter(id: string, callback?: base.MeteorCallCallback<any>): void;
}

export class CounterDataSource extends base.DataSourceBase<contract.ICounter> implements ICounterDataSource {
	private static instance: CounterDataSource;
	
	constructor() {
		super("counter", collections.counterCollection);
		if (CounterDataSource.instance !== undefined) {
			throw new Error("CounterDataSource is already defined and is singleton. Use getInstance Method to access.")
		}
		
		CounterDataSource.instance = this;
		
		this.methods(this, this.meteorCallMethods);
	}
	
	public static getInstance(): CounterDataSource {
		if (CounterDataSource.instance === undefined) {
			return new CounterDataSource();
		}
		
		return CounterDataSource.instance;
	}
	
	@base.meteorCall(CounterDataSource)
	public newCounter(name: string, callback?: base.MeteorCallCallback<Mongo.ObjectID>): Mongo.ObjectID {
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
		
		return this.collection.insert(counter);
	}
	
	@base.meteorCall(CounterDataSource)
	public incrementCounter(id: string, callback?: base.MeteorCallCallback<any>): void {
		var err = validation.ValidateUserLoggedInAndModifyAllowed(this.collection, id);
		if (err) {
			throw new Meteor.Error(err);
		}
		
		var modifier = <Mongo.Modifier> {
			$inc: { value: 1 },
			$set: { updatedUtc: new Date() }
		};
			
		this.collection.update(id, modifier);
	}
	
	@base.meteorCall(CounterDataSource)
	public removeCounter(id: string, callback?: base.MeteorCallCallback<any>): void {
		var err = validation.ValidateUserLoggedInAndModifyAllowed(this.collection, id);
		if (err) {
			throw new Meteor.Error(err);
		}
		
		this.collection.remove(id);
	}
}
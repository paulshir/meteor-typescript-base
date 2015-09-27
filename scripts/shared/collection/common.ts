/// <reference path="../../../typings/tsd.d.ts" />

import * as contract from '../contract/common'

export interface DenyAllCollection<T extends contract.IDatabaseEntry> extends Mongo.Collection<T>{
	DenyAllCollection: boolean;
}

export function DenyAllCollectionFactory<T extends contract.IDatabaseEntry>(collectionName: string): DenyAllCollection<T> {
	var collection = <DenyAllCollection<T>>new Mongo.Collection<T>(collectionName);
	var falseFunc = () => { return false; }
	var trueFunc = () => { return true; }
	
	collection.allow({
		insert: falseFunc,
		update: falseFunc,
		remove: falseFunc,
		fetch: []
	});
	
	collection.deny({
		insert: trueFunc,
		update: trueFunc,
		remove: trueFunc,
		fetch: []
	});
	
	collection.DenyAllCollection = true;
	return collection;
}

export interface CRUDCollection<T extends contract.IDatabaseEntry> extends Mongo.Collection<T> {
	CRUDCollection: boolean;
}
	
export function CRUDCollectionFactory<T extends contract.IDatabaseEntry>(collectionName: string): CRUDCollection<T> {
	var collection = <CRUDCollection<T>>new Mongo.Collection<T>(collectionName);
	function allowFunction(userId: string, doc: T) {
		return userId === doc.userId;
	}
	
	collection.allow({
		insert: allowFunction,
		update: allowFunction,
		remove: allowFunction,
		fetch: ['userId']
	});

	collection.deny({
		update: (userId: string, doc: T, fieldNames: string[], modifier: any): boolean => {
			return _.contains(fieldNames, 'userId');
		}
	});		
	
	collection.CRUDCollection = true;
	return collection;		
}
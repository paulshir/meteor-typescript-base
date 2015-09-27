/// <reference path="../../../typings/tsd.d.ts" />

export function ValidateUserLoggedIn(): string {
	if (!Meteor.userId) {
		return "Accounts not enabled. Not logged in."
	}
	
	if (!Meteor.userId()) {
		return "User is not logged in."
	}
	
	return null;
}

export function ValidateUserLoggedInAndModifyAllowed(collection: Mongo.Collection<any>, selector: Mongo.Selector): string {
	var err = ValidateUserLoggedIn();
	
	if (err) {
		return err;
	}
	
	var doc = collection.findOne(selector);
	if (_.isNull(doc) || _.isUndefined(doc)) {
		return "Counter not found.";
	}
	
	if (doc.userId !== Meteor.userId()) {
		return "Forbidden!!";
	}
	
	return null
}
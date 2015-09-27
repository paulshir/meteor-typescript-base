/// <reference path="../../../typings/tsd.d.ts" />

import * as shared from '../../shared/shared'

export function LoadCounterTemplate() {		
	Template["counters"].helpers({
		counter: shared.collections.counterCollection.find({})
	});
	
	Template["counters"].events({
		'click .count': function() {
			// increment the counter when button is clicked
			shared.datasources.counterDataSource.incrementCounter(<any>this._id);
		},
		'click .remove': function() {
			shared.datasources.counterDataSource.removeCounter(<any>this._id);
		},
		'submit .new-counter': function(event: any) {
			event.preventDefault();
			
			var name: any = event.target.name.value;
			shared.datasources.counterDataSource.newCounter(name);
			
			event.target.name.value = "";
		}
	});
}
/// <reference path="../imports.d.ts" />

namespace _mtb.client.templates {
	export function LoadCounterTemplate() {		
		Template["counters"].helpers({
			counter: mtb.shared.collections.counterCollection.find({})
		});
		
		Template["counters"].events({
			'click .count': function() {
				// increment the counter when button is clicked
				mtb.shared.datasource.counterDataSource.incrementCounter(<any>this._id);
			},
			'click .remove': function() {
				mtb.shared.datasource.counterDataSource.removeCounter(<any>this._id);
			},
			'submit .new-counter': function(event: any) {
				event.preventDefault();
				
				var name: any = event.target.name.value;
				mtb.shared.datasource.counterDataSource.newCounter(name);
				
				event.target.name.value = "";
			}
		});
	}
}
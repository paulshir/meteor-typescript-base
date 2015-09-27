/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import * as shared from '../shared/shared';
import Counter from './react/Counter';

declare var ReactMeteorData: any;

export default class App extends React.Component<{}, { counters: shared.contract.ICounter[] }> {
	constructor() {
		super();
		
		Tracker.autorun(() => {
			this.setState(this.getMeteorData())
		});	
	}
	
	public getInitialState() {
		return {
			counters: shared.collections.counterCollection.find().fetch()	
		};
	}
	
	public getMeteorData() {
		return {
			counters: shared.collections.counterCollection.find().fetch()
		};
	}	
	
	public renderCounters() {
		return this.state.counters.map((counter: shared.contract.ICounter) => {
			console.log(counter);
			return (<Counter name={counter.name} value={counter.value} />)
		});
	}
	
	public render() {
		return(<div>{this.renderCounters()}</div>);
	}
}
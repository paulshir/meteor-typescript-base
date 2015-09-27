/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import * as shared from '../shared/shared';
import Counter from './react/Counter';

declare var ReactMeteorData: any;

export default class App extends React.Component<{}, { counters: shared.contract.ICounter[] }> {
	constructor() {
		super();
	}
	
	public renderCounters() {
		return shared.collections.counterCollection.find().fetch().map((counter: shared.contract.ICounter) => {
			return (<Counter key={counter._id} id={counter._id} name={counter.name} value={counter.value} />)
		});
	}
	
	public render() {
		return(<div>{this.renderCounters()}</div>);
	}
}
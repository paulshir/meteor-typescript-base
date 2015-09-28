/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import * as shared from '../shared/shared';
import Counter from './counter/Counter';

declare function BlazeToReact(template: string): any;

const LoginButtons = BlazeToReact('loginButtons');

export default class App extends React.Component<{}, { counters: shared.contract.ICounter[] }> {
	constructor() {
		super();
		this.state = { counters: [] };
	}

	public componentDidMount() {
		Tracker.autorun(() => {
			var value = shared.collections.counterCollection.find().fetch();
			this.setState({counters: value });
		});		
	}
	
	public renderCounters() {
		return this.state.counters.map((counter: shared.contract.ICounter) => {
			return (<Counter key={counter._id} id={counter._id} name={counter.name} value={counter.value} />)
		});
	}

	public handleSubmit(e: any) {
		e.preventDefault();
		var name: string = (React.findDOMNode(this.refs["counter"]) as any).value.trim();
		shared.datasources.counterDataSource.newCounter(name);
		(React.findDOMNode(this.refs["counter"]) as any).value = "";
	}
	
	public render() {
		return(<div>
					<LoginButtons />
					<h1>Counter</h1>
					<form className="new-counter" onSubmit={this.handleSubmit.bind(this)}>
						<input type="name" name="name" placeholder="Type to add a new counter" ref="counter" />
					</form>
					<ul>{this.renderCounters()}</ul>
			   	</div>
			   );
	}
}
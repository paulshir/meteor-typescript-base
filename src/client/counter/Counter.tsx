import * as React from 'react';
import * as shared from '../../shared/shared';

export interface CounterProps {
	id: string;
	key: string;
	name: string;
	value: number;
}
declare var mtb: any;

export default class Counter extends React.Component<CounterProps, {}> {	
	private computation: Tracker.Computation;

	constructor(props: CounterProps) {
		super(props);
	}

	public handleIncrement(e: any) {
		e.preventDefault();
		shared.datasources.counterDataSource.incrementCounter(this.props.id);
	}

	public handleRemove(e: any) {
		e.preventDefault();
		shared.datasources.counterDataSource.removeCounter(this.props.id);
	}
	
	render() {
		return(<li>
  			<p>You've pressed the {this.props.name} counter {this.props.value} times.</p>
			<button onClick={this.handleIncrement.bind(this)}>Count</button>
			<button onClick={this.handleRemove.bind(this)}>Remove Counter</button>
	 	</li>);
	}
}
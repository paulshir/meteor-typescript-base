import * as React from 'react';
import * as shared from '../../shared/shared';
import * as css from './counter.css';

export interface CounterEntryProps {
	id: string;
	key: string;
	name: string;
	value: number;
}

export default class CounterEntry extends React.Component<CounterEntryProps, {}> {	
	private computation: Tracker.Computation;

	constructor(props: CounterEntryProps) {
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
	
	public render() {
		return (<div className={css.counterEntry + " col-sm-6"}>
  			<p>You've pressed the {this.props.name} counter {this.props.value} times.</p>
			<div>
				<button type="button" className="btn btn-primary" onClick={this.handleIncrement.bind(this)}>Count</button>
				<button type="button" className="btn btn-danger" onClick={this.handleRemove.bind(this)}>Remove Counter</button>
			</div>
	 	</div>);
	}
}
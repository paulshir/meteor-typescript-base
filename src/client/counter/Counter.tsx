import * as React from 'react';
import * as shared from '../../shared/shared';
import CounterEntry from './CounterEntry';
import CounterHeader from './CounterHeader';
import * as css from './counter.css';

export interface CounterState {
	counters: shared.contract.ICounter[]
}

export default class Counter extends React.Component<{}, CounterState> {	
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
			return (<CounterEntry key={counter._id} id={counter._id} name={counter.name} value={counter.value} />)
		});
	}
	
	public render() {
		return (<div className={css.counter}>
					<CounterHeader />
					<ul>{this.renderCounters()}</ul>
				</div>
				);
	}
}
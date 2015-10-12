import * as css from './counter.css';

import * as React from 'react';
import * as shared from '../../shared/shared';
import CounterEntry from './CounterEntry';
import CounterHeader from './CounterHeader';
import Grid from '../components/grid/grid'
import GridCell from '../components/grid/gridcell'


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
		return this.state.counters.map((counter: shared.contract.ICounter, index: number, array: shared.contract.ICounter[]) => {
			return (<GridCell key={counter._id} cellCount={{ mobile: 12, tablet: 6 }}><CounterEntry key={counter._id} id={counter._id} name={counter.name} value={counter.value} /></GridCell>)
		});
	}
	
	public render() {
		return (<div className={css.counter + " container"}>
					<Grid><GridCell cellCount={{ mobile: 12 }}><CounterHeader /></GridCell></Grid>
					<Grid>{this.renderCounters()}</Grid>
				</div>
				);
	}
}
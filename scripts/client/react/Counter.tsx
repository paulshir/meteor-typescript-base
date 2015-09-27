import * as React from 'react';
import * as shared from '../../shared/shared';

export interface CounterProps {
	id: string;
	key: string;
	name: string;
	value: number;
}

export default class Counter extends React.Component<CounterProps, {value: number}> {
	public state = { value: 0 }
	
	constructor(props: CounterProps) {
		super(props);
	}
	
	public componentDidMount() {
		console.log("Test: " + this.props.key);
		console.log(this.props);
		Tracker.autorun(() => {
			var value = shared.collections.counterCollection.findOne(this.props.id);
			console.log(value);
			this.setState({value: value.value });
		});			
	}
	
	render() {
		return(<li>
  			<p>You've pressed the {this.props.name} counter {this.state.value} times.</p>
			<button>Count</button>
			<button>Remove Counter</button>
	 	</li>);
	}
}
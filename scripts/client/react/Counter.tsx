import * as React from 'react';

export interface CounterProps {
	name: string;
	value: number;
}

export default class Counter extends React.Component<CounterProps, {}> {
	render() {
		return(<li>
  			<p>You've pressed the {this.props.name} counter {this.props.value} times.</p>
			<button>Count</button>
			<button>Remove Counter</button>
	 	</li>);
	}
}
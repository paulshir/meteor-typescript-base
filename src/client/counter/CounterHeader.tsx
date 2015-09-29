import * as React from 'react';
import * as shared from '../../shared/shared';
import * as css from './counter.css';

export default class CounterHeader extends React.Component<{}, {}> {
	public handleSubmit(e: any) {
		e.preventDefault();
		var name: string = (React.findDOMNode(this.refs["counter"]) as any).value.trim();
		shared.datasources.counterDataSource.newCounter(name);
		(React.findDOMNode(this.refs["counter"]) as any).value = "";
	}
	
	public render() {
		return (<div className={css.counterHeader}><h1>Counter</h1>
			    	<form className="new-counter" onSubmit={this.handleSubmit.bind(this)}>
					<input type="name" name="name" placeholder="Type to add a new counter" ref="counter" />
				</form></div>
			);
	}
}
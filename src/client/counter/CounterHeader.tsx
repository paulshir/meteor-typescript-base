import * as React from 'react';
import * as shared from '../../shared/shared';
import * as css from './counter.css';

export default class CounterHeader extends React.Component<{}, {}> {
	public handleSubmit(e: any) {
		e.preventDefault();
		var name: string = (this.refs["counter"] as any).value.trim();
		shared.datasources.counterDataSource.newCounter(name);
		((this.refs["counter"]) as any).value = "";
	}
	
	public render() {
		return (<div className={css.counterHeader}>
					<h1>Counter</h1>
					<form className="new-counter" onSubmit={this.handleSubmit.bind(this)}>
						<fieldset className="form-group">
							<label htmlFor="name">Add a new counter</label>
							<input type="name" name="name" className="form-control" placeholder="Enter counter name" ref="counter" />
						</fieldset>
					</form>
				</div>
			);
	}
}
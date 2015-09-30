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
		return (<div className={css.counterHeader + " row"}>
					<div className="col-sm-6 col-of-3">
						<h1>Counter</h1>
						<form className="new-counter" onSubmit={this.handleSubmit.bind(this)}>
							<fieldset className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input type="name" name="name" className="form-control" id="exampleInputEmail1" placeholder="Enter counter name" ref="counter" />
								<small className="text-muted">Enter Counter name and hit enter.</small>
							</fieldset>
						</form>
					</div>
				</div>
			);
	}
}
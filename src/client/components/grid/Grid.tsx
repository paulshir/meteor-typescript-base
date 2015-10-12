import './grid.css';
import * as React from 'react';

export interface GridProps {
	children?: any[];
}

export default class Grid extends React.Component<GridProps, {}> {
	public render() {
		return (<div className="grid">{ this.props.children }</div>);
	}
}
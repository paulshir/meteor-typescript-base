import './grid.css';
import * as React from 'react';

export interface cellCount {
	mobile?: number;
	phablet?: number;
	tablet?: number;
	desktop?: number;
	hd?: number;
	
	[size: string]: number;
}

export interface GridCellProps {
	children?: any[];
	cellCount?: cellCount;
	key?: string;
}

export default class GridCell extends React.Component<GridCellProps, {}> {
	public render() {
		let className = "grid-cell";
		if (this.props.cellCount) {
			let lowestFound = false;
			
			for (let size of ['mobile', 'phablet', 'tablet', 'desktop', 'hd']) {
				if (this.props.cellCount[size]) {
					if (lowestFound) {
						className += " gt-" + size + "-cell-count-" + this.props.cellCount[size]; 
					} else {
						className += " cell-count-" + this.props.cellCount[size];
						lowestFound = true;
					}
				}
			}
		}
		return (<div className={className}>{ this.props.children }</div>)
	}
}
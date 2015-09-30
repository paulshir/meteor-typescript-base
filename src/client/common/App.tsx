import * as React from 'react';
import * as shared from '../../shared/shared';
import Counter from '../counter/Counter';
import './main.html';
import './main.css';


declare function BlazeToReact(template: string): any;

const LoginButtons = BlazeToReact('loginButtons');

export default class App extends React.Component<{}, {}> {
	public render() {
		return (<div className="container"><LoginButtons /><Counter /></div>);
	}
}
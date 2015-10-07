import * as React from 'react';
import * as shared from '../../shared/shared';
import Counter from '../counter/Counter';
import LoginButtons from '../components/LoginButtons'
import 'normalize-css';
import './main.html';
import './main.css';

export default class App extends React.Component<{}, {}> {
	public render() {
		return (<div className="container"><LoginButtons /><Counter /></div>);
	}
}
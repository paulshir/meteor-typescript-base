/// <reference path="./react-tap-event-plugin.d.ts" />

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './main.html';
import './main.css';

import * as React from 'react';
import * as shared from '../../shared/shared';
import LoginButtons from '../components/LoginButtons'
import Counter from '../counter/Counter';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component<{}, {}>{
	public render() {
		return (<div className='app'><Header /><Main /><Footer /></div>);
	}
}

class Header extends React.Component<{}, {}> {
	public render() {
		return <header>
					<LoginButtons />
				</header>
	}
}

class Main extends React.Component<{}, {}> {
	public render() {
		return <main>
					<Counter />
			   </main>
	}
}

class Footer extends React.Component<{}, {}> {
	public render() {
		return <footer>
					Footer
				</footer>
	}
}
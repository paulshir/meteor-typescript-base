/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import * as shared from '../../shared/shared';
import Counter from '../counter/Counter';

declare function BlazeToReact(template: string): any;

const LoginButtons = BlazeToReact('loginButtons');

export default class App extends React.Component<{}, {}> {
	public render() {
		return(<div><LoginButtons /><Counter /></div>);
	}
}
/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';

import * as shared from '../shared/shared';
import * as subscribe from './subscribe';
import App from './App';
import './main.html';
import './main.css';

export {shared}

shared.collections.InitializeCollections();
shared.datasources.InitializeDataSources();
subscribe.SubscribeAll();

export function render() {
	React.render(<App />, document.getElementById('render-target'));
}

Meteor.startup(() => {
	render();
});
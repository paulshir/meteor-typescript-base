/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';

import * as shared from '../shared/shared';
import App from './common/App';
import './main.html';
import './main.css';

export {shared}

shared.collections.InitializeCollections();
shared.datasources.InitializeDataSources();
shared.subscribe.SubscribeAll();

export function render() {
	React.render(<App />, document.getElementById('render-target'));
}

Meteor.startup(() => {
	render();
});
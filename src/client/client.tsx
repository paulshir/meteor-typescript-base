import * as React from 'react';
import * as ReactDom from 'react-dom';

import * as shared from '../shared/shared';
import App from './common/App';
export { shared }

shared.collections.InitializeCollections();
shared.datasources.InitializeDataSources();
shared.subscribe.SubscribeAll();

export function render() {
	ReactDom.render<{}, {}>(<App />, document.getElementById('render-target'));
}

Meteor.startup(() => {
	render();
});
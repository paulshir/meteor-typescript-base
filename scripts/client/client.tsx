/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';

import * as shared from '../shared/shared'
import * as subscribe from './subscribe'
import * as templates from './templates/counter'
// import App from './App'

export {shared}

shared.collections.InitializeCollections();
shared.datasources.InitializeDataSources();
subscribe.SubscribeAll();

templates.LoadCounterTemplate();

// export function render() {
// 	React.render(<App />, document.getElementById('render-target'));
// }

// Meteor.startup(() => {
// 	render();
// });
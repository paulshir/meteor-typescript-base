/// <reference path="imports.d.ts" />

/// <reference path="publish/exports.ts" />

namespace _mtb.server {
	Meteor.startup(() => {
		mtb.shared.collections.InitializeCollections();
		publish.PublishAll();
		mtb.shared.datasource.InitializeDataSources();
	})
}

mtb.server = _mtb.server;


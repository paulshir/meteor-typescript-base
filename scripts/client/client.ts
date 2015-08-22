/// <reference path="imports.d.ts" />

/// <reference path="subscribe/exports.ts"" />

/// <reference path="templates/exports.ts" />

namespace _mtb.client {
	mtb.shared.collections.InitializeCollections();
	subscribe.SubscribeAll();
	mtb.shared.datasource.InitializeDataSources();
	
	templates.LoadTemplates();
}

mtb.client = _mtb.client;


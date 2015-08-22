/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="contract/common.ts" />
/// <reference path="contract/counter.ts" />

/// <reference path="collections/exports.ts" />
/// <reference path="datasource/exports.ts" />

namespace _mtb.shared {
}

declare var mtb: { shared: typeof _mtb.shared, server: any; client: any };
mtb = { shared: _mtb.shared, server: null, client: null };
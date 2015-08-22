/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="common.ts" />
/// <reference path="../contract/counter.ts" />

namespace _mtb.shared.validation {
	export function ValidateNewCounter(name: string): string {
		if (_.isNull(name) || _.isUndefined(name)) {
			return "[name] must be provided."
		}
		
		if (!_.isString(name)) {
			return "[name] must be a string."
		}
		
		return null;
	}
}
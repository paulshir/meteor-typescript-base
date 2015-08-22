/// <reference path="../../../typings/tsd.d.ts" />

namespace _mtb.shared.contract {
	export interface IDatabaseEntry {
		_id: string;
		userId: string;
		createdUtc: Date;
		updatedUtc: Date;		
	}
	
	export interface UpdateOptions {
		multi?: boolean;
		upsert?: boolean;
	}
}
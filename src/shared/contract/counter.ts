import * as common from './common'

export const Counter = {
	COLLECTION_NAME: "counters",
	PUBLISH_NAME: "counters"
}

export interface ICounter extends common.IDatabaseEntry {
	name: string;
	value: number;
}
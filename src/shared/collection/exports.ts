import * as contract from '../contract/exports'
import * as common from './common'
export * from './common'

export default class __collections {
	public static counterCollection: common.DenyAllCollection<contract.ICounter>;
	
	public static InitializeCollections() {
		__collections.counterCollection || (__collections.counterCollection = common.DenyAllCollectionFactory<contract.ICounter>(contract.Counter.COLLECTION_NAME));
	}
}
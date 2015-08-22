/// <reference path="../tsd.d.ts" />
declare module _mtb.shared.contract {
    interface IDatabaseEntry {
        _id: string;
        userId: string;
        createdUtc: Date;
        updatedUtc: Date;
    }
    interface UpdateOptions {
        multi?: boolean;
        upsert?: boolean;
    }
}
declare module _mtb.shared.contract {
    const Counter: {
        COLLECTION_NAME: string;
        PUBLISH_NAME: string;
    };
    interface ICounter extends IDatabaseEntry {
        name: string;
        value: number;
    }
}
declare module _mtb.shared.collections {
    interface DenyAllCollection<T extends contract.IDatabaseEntry> extends Mongo.Collection<T> {
        DenyAllCollection: boolean;
    }
    function CreateDenyAllCollection<T extends contract.IDatabaseEntry>(collectionName: string): DenyAllCollection<T>;
    interface CRUDCollection<T extends contract.IDatabaseEntry> extends Mongo.Collection<T> {
        CRUDCollection: boolean;
    }
    function CreateCRUDCollection<T extends contract.IDatabaseEntry>(collectionName: string): CRUDCollection<T>;
}
declare module _mtb.shared.collections {
    var counterCollection: DenyAllCollection<contract.ICounter>;
    function InitializeCollections(): void;
}
declare module _mtb.shared.validation {
    function ValidateUserLoggedIn(): string;
    function ValidateUserLoggedInAndModifyAllowed(collection: Mongo.Collection<any>, selector: Mongo.Selector): string;
}
declare module _mtb.shared.datasource {
    interface MeteorCallCallback<T> {
        (err?: Meteor.Error, result?: T): void;
    }
    class DataSourceBase<T extends contract.IDatabaseEntry> {
        private methodPrefix;
        protected collection: Mongo.Collection<T>;
        constructor(methodPrefix: string, collection: Mongo.Collection<T>);
        protected methods(methods: any): void;
        protected call(methodName: string, ...args: any[]): void;
        find(): Mongo.Cursor<T>;
        findOne(): T;
        private getMethodName(method);
    }
}
declare module _mtb.shared.validation {
    function ValidateNewCounter(name: string): string;
}
declare module _mtb.shared.datasource {
    interface ICounterDataSource {
        newCounter(name: string, callback?: MeteorCallCallback<Mongo.ObjectID>): void;
        incrementCounter(id: string, callback?: MeteorCallCallback<any>): void;
        removeCounter(id: string, callback?: MeteorCallCallback<any>): void;
    }
    var counterDataSource: ICounterDataSource;
    function InitializeCounterDataSource(collection: collections.DenyAllCollection<contract.ICounter>): void;
}
declare module _mtb.shared.datasource {
    function InitializeDataSources(): void;
}
declare module _mtb.shared {
}
declare var mtb: {
    shared: typeof _mtb.shared;
    server: any;
    client: any;
};

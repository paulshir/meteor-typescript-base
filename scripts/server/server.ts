/// <reference path="../../typings/tsd.d.ts" />
import * as shared from '../shared/shared'
import * as publish from './publish'

shared.collections.InitializeCollections();
shared.datasources.InitializeDataSources();
publish.PublishAll();
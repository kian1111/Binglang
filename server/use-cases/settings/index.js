import makeFetchSettings from "./fetch-settings.js";

import {userDb} from '../../data-access/index.js'
import Id from '../../util/Id/index.js'

export const fetchSettings = makeFetchSettings({userDb, Id})
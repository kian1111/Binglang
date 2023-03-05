import hashManager from '../util/hashManager/index.js'
import makePasswordManager from './makePasswordManager.js';
import config from '../config/index.js'
import makeJWTAuth from './makeJWTAuth.js'

export const passwordManager = makePasswordManager({hashManager});
export const authManager = makeJWTAuth(config);

import makeAuthUser from './auth-user.js'
import makeGetAuthUser from './get-auth-user.js'
import { fetchUsers } from '../../use-cases/user/index.js'

import {passwordManager, authManager} from '../../auth/index.js'


export const authUser = makeAuthUser({fetchUsers, passwordManager, authManager})
export const getAuthUser = makeGetAuthUser({fetchUsers})



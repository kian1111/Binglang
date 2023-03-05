import makeFetchUsers from './fetch-users.js'

import {userDb} from '../../data-access/index.js'
import Id from '../../util/Id/index.js'


export const fetchUsers = makeFetchUsers({userDb, Id})

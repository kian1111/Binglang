import {passwordManager} from './server/auth/index.js'

passwordManager.hash('teacher111').then((result) => console.log(result))

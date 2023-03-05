import {passwordManager} from './server/auth/index.js'

passwordManager.hash('password').then((result) => console.log(result))

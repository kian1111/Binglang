import {passwordManager} from './server/auth/index.js'

passwordManager.hash('password111').then((result) => console.log(result))

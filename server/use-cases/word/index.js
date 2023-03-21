import makeAddWord from './add-word.js'
import makeFetchWords from './fetch-words.js'
import makeRemoveWord from './remove-word.js'
import makeUpdateWord from './update-word.js'

import {userDb} from '../../data-access/index.js'
import Id from '../../util/Id/index.js'


export const addWord = makeAddWord({userDb, Id})
export const fetchWords = makeFetchWords({userDb, Id})
export const removeWord = makeRemoveWord({userDb, Id})
export const updateWord = makeUpdateWord({userDb, Id})
import makePostWord from './post-word.js'
import makeGetWords from './get-words.js'
import makeDeleteWord from './delete-word.js'
import makePutWord from './put-word.js'

import { addWord } from '../../use-cases/word/index.js'
import { fetchWords } from '../../use-cases/word/index.js'
import { removeWord } from '../../use-cases/word/index.js'
import { updateWord } from '../../use-cases/word/index.js'


export const postWord = makePostWord({addWord})
export const getWord = makeGetWords({fetchWords})
export const deleteWord = makeDeleteWord({removeWord})
export const putWord = makePutWord({updateWord})
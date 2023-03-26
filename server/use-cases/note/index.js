import makeFetchNotes from './fetch-notes.js'
import makeAddNote from './add-notes.js'
import makeFetchNotesByDate from './fetch-note-date.js'
import makeUpdateNote from './update-notes.js'

import {userDb} from '../../data-access/index.js'
import Id from '../../util/Id/index.js'

export const fetchNotes = makeFetchNotes({userDb, Id})
export const addNote = makeAddNote({userDb, Id})
export const fetchNotesByDate = makeFetchNotesByDate({userDb})
export const updateNote = makeUpdateNote({userDb})
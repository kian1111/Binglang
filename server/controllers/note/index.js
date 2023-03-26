import makePostNote from './post-note.js'
import makeGetNotes from './get-notes.js'


import { addNote} from "../../use-cases/note/index.js"
import {fetchNotes} from "../../use-cases/note/index.js"
import { fetchNotesByDate } from '../../use-cases/note/index.js'
import { updateNote } from '../../use-cases/note/index.js'


export const getNotes = makeGetNotes({fetchNotes})
export const postNote = makePostNote({addNote, fetchNotesByDate, updateNote})



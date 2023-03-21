import makeFetchStudents from "./fetch-students.js";
import makeFetchStudentWords from "./fetch-student-words.js";
import makeAddStudentWord from "./add-student-word.js";


import {userDb} from '../../data-access/index.js'
import Id from '../../util/Id/index.js'

export const fetchStudents = makeFetchStudents({userDb, Id})
export const fetchStudentWords = makeFetchStudentWords({userDb, Id})
export const addStudentWord = makeAddStudentWord({userDb, Id})


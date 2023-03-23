import makeGetStudents from "./get-students.js";
import makeGetStudentWords from "./get-student-words.js";
import makePostStudentWord from "./post-student-word.js";
import makePostBulkStudentWord from "./post-bulk-student-word.js";

import { fetchStudents} from "../../use-cases/student/index.js";
import { fetchStudentWords } from "../../use-cases/student/index.js";
import { addStudentWord } from "../../use-cases/student/index.js";
import {addBulkStudentWord} from "../../use-cases/student/index.js";

export const getStudents = makeGetStudents({fetchStudents})
export const getStudentWords = makeGetStudentWords({fetchStudentWords})
export const postStudentWord = makePostStudentWord({addStudentWord})
export const postBulkStudentWord = makePostBulkStudentWord({addBulkStudentWord})
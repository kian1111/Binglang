import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledDashboard } from "./style"
import { DailyWords } from "../../../components/features/teacher/dashboard/DailyWords"
import { formatDate, studentList, wordList, studentSettings, getStudentSettings, findNotes } from "./action";



export const TeacherDashBoard = () => {

    const auth = useSelector(state => state.auth);


    const [listStudents, setListStudents] = useState(["Kian", "Yeonhong"])
    let today = new Date();
    let sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    const [startDate, setStartDate] = useState(sevenDaysAgo)
    const [endDate, setEndDate] = useState(today)
    const [words, setWords_debug] = useState({})
    const [userName, setUserName] = useState('')
    const [selectedUser, setSelectedUser] = useState('')
    const [selectedUserId, setSelectedUserId] = useState('');
    const [studentId, setStudentId] = useState('')
    const [studentSettings, setStudentSettings] = useState('')
    const [savedNotes, setSavedNotes] = useState('')

    const setWords = (val) => {
        console.log("inside setWord", val)
        setWords_debug(val)
    }

    const changeStudent = () => {
        setUserName(selectedUser)
        setStudentId(selectedUserId)

    }

    function handleUserSelection(e) {
        setSelectedUser(e.target.value)
        let current = e.target.options.selectedIndex
        setSelectedUserId(e.target.options[current].getAttribute('data-key'))
    }



    const filterByDay = (data, start, end) => {
        let filteredData = {}
        let currentDate = new Date(start)
        while (currentDate <= end) {
            let date = formatDate(currentDate)
            filteredData[date] = []
            currentDate.setDate(currentDate.getDate() + 1)
        }
        for (let i = 0; i < data.length; i++) {
            if (filteredData[formatDate(data[i].date)]) {
                filteredData[formatDate(data[i].date)].push(data[i])
            }

        }
       
        setWords(filteredData)

    }

    const filterNotesByDay = (note, start, end) => {
        let filteredData = {}
        let currentDate = new Date(start)
        while (currentDate <= end) {
            let date = formatDate(currentDate)
            filteredData[date] = []
            currentDate.setDate(currentDate.getDate() + 1)
        }
        for (let i = 0; i < note.length; i++) {
            if (filteredData[formatDate(note[i].date)]) {
                filteredData[formatDate(note[i].date)].push(note[i])
            }
        }
        setSavedNotes(filteredData)
    }




    useEffect(() => {
        const load = async () => {
            let myStudents = await studentList({ _id: auth._id })
            let myWords = await wordList({ _id: studentId, startDate, endDate })
            let myStudentSettings = await getStudentSettings({ _id: studentId })
            let notes = await findNotes({ _id: studentId, startDate, endDate })
            filterByDay(myWords, startDate, endDate)
            filterNotesByDay(notes, startDate, endDate)
            setListStudents(myStudents)
            setStudentSettings(myStudentSettings)

            console.log("studentsettings", studentSettings)
        };

        load();
    }, [startDate, endDate, studentId])

    return (

        <StyledDashboard>

            <header className="divhead">

                <div>Student : {userName}</div>

                <div>Learning language : {studentSettings.target_language}</div>
            </header>
            <div className="div-right-center">
                <div>
                    <select value={selectedUser} onChange={(e) => handleUserSelection(e)}>
                        <option value="">--Select a user--</option>
                        {listStudents.map(student => (
                            <option key={student._id} data-key={student._id} value={student.full_name}>{student.full_name}</option>
                        ))}
                    </select>
                    <button
                        onClick={changeStudent}
                    >Submit</button>
                </div>
                <div> Date:
                    <input
                        className="input"
                        type="date"
                        value={formatDate(startDate)}
                        onChange={e => setStartDate(new Date(e.target.value))}
                    />
                    <input
                        className="input"
                        type="date"
                        value={formatDate(endDate)}
                        onChange={e => setEndDate(new Date(e.target.value))}
                    />
                </div>
            </div>

            <DailyWords initDate={startDate} studentId={studentId} savedNotes={savedNotes} setSavedNotes={setSavedNotes} studentSettings={studentSettings} wordItems={words} setWordItems={setWords} finalDate={endDate} setStartDateItem={setStartDate} setEndDateItem={setEndDate}></DailyWords>

        </StyledDashboard>


    );
}
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledDashboard } from "./style"
import { DailyWords } from "../../components/features/dashboard/DailyWords"
import { formatDate, wordList } from "./action";
import { useFormik } from "formik";
import * as yup from 'yup'



export const DashBoard = () => {
    const auth = useSelector(state => state.auth);

    const [listStudents, setListStudents] = useState(["Kian", "Yeonhong"])
    let today = new Date();
    let sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    const [startDate, setStartDate] = useState(sevenDaysAgo)
    const [endDate, setEndDate] = useState(today)
    const [words, setWords] = useState({})
    const [userName, setUserName] = useState('')

    const formik = useFormik({
        initialValues: {
            userName: "Yeonhong",
        },

        validationSchema: yup.object({

        }),

        onSubmit: async (name) => {



        }
    })

    const changeStudent = () => {
        setUserName(formik.values.userName)
    }

    

    const filterByDay = (data, start, end) => {
        let filteredData = {}
        let currentDate = new Date(start)

        while (currentDate <= end){
                let date = formatDate(currentDate)
                filteredData[date] = []
                currentDate.setDate(currentDate.getDate() + 1)
            }
        for(let i =0; i <data.length ; i++){
            if (filteredData[formatDate(data[i].date)]){
                filteredData[formatDate(data[i].date)].push(data[i])
            }
        }    

        setWords(filteredData)
        
    }

    useEffect(() => {
        const load = async () => {
          let myWords = await wordList({_id : auth._id, startDate , endDate })
          filterByDay(myWords, startDate, endDate)
        };

        load();
    }, [startDate, endDate])
    return (

        <StyledDashboard>
            
                <header className="divhead">

                    <div>Student : {userName}</div>

                    <div>Learning language : English</div>
                </header>
                <div className="div-right-center">
                    <div>
                        <select name="userName" defaultValue={userName || ""}
                            value={formik.values.userName} onChange={formik.handleChange}>
                            <option value=""></option>
                            {listStudents.map((student, index) => (
                                <option key={index} data-key={student} value={student}>{student}</option>
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
            
            <DailyWords initDate={startDate} wordItems={words} setWordItems={setWords} finalDate={endDate} setStartDateItem={setStartDate} setEndDateItem={setEndDate}></DailyWords>

        </StyledDashboard>


    );
}
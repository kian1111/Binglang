import { useState } from "react"
import { DefaultWordView } from "../DefaultWordView"
import { StyledDailyWords } from "./style"







export const DailyWords = ({initDate, savedNotes, setSavedNotes, finalDate, setStartDateItem, setEndDateItem, wordItems, setWordItems, studentId, studentSettings}) => {


    const [displayWord, setDisplayWord] = useState("default")
    const [displayAdd, setDisplayAdd] = useState(false)
    const [startDate, setStartDate] = useState(initDate)
    const [endDate, setEndDate] = useState(finalDate) 

    const changeNote = (date, newNote) => {
        // if note existe
        
        //new notes
        let newNoteItem = {...savedNotes}

        newNoteItem[date] = newNote

        setSavedNotes(newNoteItem)

        //notes already exist

    }

    const changeWord = (date, newWord) => {

        let newWordItems = {...wordItems}


        newWordItems[date] = newWord


        setWordItems(newWordItems)
    }

    return (
        <StyledDailyWords>
            DailyWords <br />
            
                    {displayWord === "default" &&
                    <>
                    {Object.entries(wordItems).map(([date, word])=> <DefaultWordView key={date} wordItems={word} 
                    updateWordItems={(newWord) => changeWord(date,newWord)} dateItem={date} studentId = {studentId}
                    studentSettings={studentSettings} savedNotes={savedNotes[date][0] ? savedNotes[date][0]['notes'] : ""} setSavedNotes={setSavedNotes}
                    updateNote={(newNote) => changeNote(date, newNote)}/>)}
                    </>}
            
        </StyledDailyWords>
    )
}
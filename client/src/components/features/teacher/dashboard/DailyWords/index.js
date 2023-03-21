import { useState } from "react"
import { DefaultWordView } from "../DefaultWordView"
import { StyledDailyWords } from "./style"







export const DailyWords = ({initDate, finalDate, setStartDateItem, setEndDateItem, wordItems, setWordItems, studentId}) => {

    const [displayWord, setDisplayWord] = useState("default")
    const [displayAdd, setDisplayAdd] = useState(false)
    const [startDate, setStartDate] = useState(initDate)
    const [endDate, setEndDate] = useState(finalDate) 


    const changeWord = (date, newWord) => {

        wordItems[date] = newWord
        
        setWordItems(wordItems)
    }

    return (
        <StyledDailyWords>
            DailyWords <br />
            
                    {displayWord === "default" &&
                    <>
                    {Object.entries(wordItems).map(([date, word])=> <DefaultWordView key={date} wordItems={word} 
                    updateWordItems={(newWord) => changeWord(date,newWord)} dateItem={date} studentId = {studentId}/>)}
                    </>}
            
        </StyledDailyWords>
    )
}
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { formatDate, wordList } from "../../../../pages/DashBoard/action"
import { AddWord } from "../AddWord"
import { DefaultWordView } from "../DefaultWordView"
import { StyledDailyWords } from "./style"





export const DailyWords = ({initDate, finalDate, setStartDateItem, setEndDateItem, wordItems}) => {

    const [displayWord, setDisplayWord] = useState("default")
    const [displayAdd, setDisplayAdd] = useState(false)
    const [words, setWords] = useState({wordItems})

    const [startDate, setStartDate] = useState(initDate)
    const [endDate, setEndDate] = useState(finalDate) 


    console.log("test", words)

    return (
        <StyledDailyWords>
            DailyWords <br />
            
                    {displayWord === "default" &&
                    <>
                    {Object.entries(wordItems).map(([date, word])=> <DefaultWordView key={date}  wordCollection={wordItems} setWordCollection={setWords} wordItems={word} dateItem={date}/>)}
                    </>}
            
        </StyledDailyWords>
    )
}
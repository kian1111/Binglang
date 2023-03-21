import { useEffect, useState } from "react"
import { deleteWord, formatDate } from "../../../../../pages/Teacher/TeacherDashboard/action.js"
import { AddWord } from "../AddWord"
import { UpdateWord } from "../UpdateWord"
import { StyledDefaultWordView } from "./style"


export const DefaultWordView = ({ wordItems, dateItem, updateWordItems, studentId }) => {
    const [displayAdd, setDisplayAdd] = useState(false)
    const [currentlyEditing, setCurrentlyEditing] = useState(null)
    const [_id, setId] = useState('')

    const onEditClick = (id) => {
        setCurrentlyEditing(id)
    }

    const onDeleteClick = async (index) => {
        let newId = wordItems[index]._id
        try {
            let newWords = [...wordItems]
            for (let i = 0; i < wordItems.length; i++)
                if (wordItems[i]._id === newId) {
                    newWords.splice(i, 1)
                    updateWordItems(newWords)
                }
            setId(newId)
            await deleteWord( {_id:newId})
        }
        catch (err) {
            console.log(err);
            alert(err.message);
        }

    }





    return (

        <StyledDefaultWordView>
                <div align="center" ><header background-color="#4CAF50">{dateItem} </header></div>
                <div className="grid-container" >

                    {wordItems.map((item, index) => (
                        <div key={item._id}>
                            {currentlyEditing != item._id &&
                                <div className="grid-item">
                                    <label>
                                        English: {item.targetLanguage}
                                        Date : {formatDate(item.date)}
                                    </label>


                                    <label>
                                        Korean: {item.nativeLanguage}
                                    </label>
                                    <p>
                                        <button

                                            onClick={() => {
                                                onEditClick(item._id)
                                            }}
                                        >Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                                onDeleteClick(index)
                                            }}
                                        >❌
                                        </button>
                                    </p>
                                </div>}





                            {currentlyEditing === item._id && <><UpdateWord wordItems={wordItems} wordId={wordItems[index]._id} 
                             onCancel={() => { onEditClick(null) }} selectedLanguage={"Korean"} 
                            word={item.targetLanguage} wordNative={item.nativeLanguage}  studentId = {studentId}
                            updateWordItems={updateWordItems}/>


                            </>
                            }

                        </div>
                    ))}
                    <div className="grid-item">
                        <div className="my-div">
                            {!displayAdd && <button
                                type="submit"
                                onClick={() => {
                                    setDisplayAdd(true)
                                    console.log("date", dateItem)
                                }}>
                                <i class="fa-solid fa-plus fa-3x"></i>
                            </button>}

                            {displayAdd && <><AddWord dateItem={dateItem} wordItems={wordItems} updateWordItems={updateWordItems} 
                            onCancel={() => { setDisplayAdd(false) }} studentId = {studentId} />

                            </>}
                        </div>
                    </div>
                </div>
            
        </StyledDefaultWordView>
    )
}
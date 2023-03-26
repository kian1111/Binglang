import { useEffect, useRef, useState } from "react"
import { addNotes, deleteWord, formatDate } from "../../../../../pages/Teacher/TeacherDashboard/action.js"
import { AddWord } from "../AddWord"
import { UpdateWord } from "../UpdateWord"
import { StyledDefaultWordView } from "./style"


export const DefaultWordView = ({ wordItems, dateItem, updateWordItems, studentId, studentSettings, savedNotes, setSavedNotes, updateNote }) => {
    const [displayAdd, setDisplayAdd] = useState(false)
    const [currentlyEditing, setCurrentlyEditing] = useState(null)
    const [_id, setId] = useState('')
    const [displayNotes, setDisplayNotes] = useState(false)
    const textAreaRef = useRef(null);
    
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
            await deleteWord({ _id: newId })
        }
        catch (err) {
            console.log(err);
            alert(err.message);
        }

    }

    const changeDisplayNotes = () => {
        setDisplayNotes(true)
    }

    const cancleDisplayNotes = () => {
        setDisplayNotes(false)
    }

    const saveNotes = () => {
        addNotes({_id : studentId, notes : textAreaRef.current.value, date : dateItem})



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
                                    {studentSettings.target_language}: {item.targetLanguage}
                                </label>


                                <label>
                                    {studentSettings.native_language}: {item.nativeLanguage}
                                </label>
                                <p>
                                    <button

                                        onClick={() => {
                                            onEditClick(item._id)
                                        }}
                                    ><i class="fa-sharp fa-solid fa-pen"></i>
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
                            word={item.targetLanguage} wordNative={item.nativeLanguage} studentId={studentId}
                            updateWordItems={updateWordItems} studentSettings={studentSettings} />


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
                            onCancel={() => { setDisplayAdd(false) }} studentId={studentId} studentSettings={studentSettings} />

                        </>}
                    </div>
                </div>
                
                <div >
                    {!displayNotes && <>
                        <button onClick={changeDisplayNotes}><i class="fa-sharp fa-solid fa-eye"></i>Notes</button>
                    </>}


                    {displayNotes &&
                        <>
                            <textarea className="notes" defaultValue={savedNotes} ref={textAreaRef}>
                                
                            </textarea>
                            <p>
                            <button onClick={saveNotes}><i class="fa-solid fa-floppy-disk"></i></button>
                            <button onClick={cancleDisplayNotes}>Cancel</button>
                        </p>
                        </>
                    }

                </div>
            </div>

        </StyledDefaultWordView>
    )
}
import { useEffect, useState } from "react"
import { deleteWord, formatDate } from "../../../../pages/DashBoard/action"
import { AddWord } from "../AddWord"
import { UpdateWord } from "../UpdateWord"
import { StyledDefaultWordView } from "./style"


export const DefaultWordView = ({ wordItems, dateItem, setWordCollection }) => {
    const [words, setWords] = useState(wordItems || null)
    const [displayAdd, setDisplayAdd] = useState(false)
    const [currentlyEditing, setCurrentlyEditing] = useState(null)
    const [_id, setId] = useState('')

    const onEditClick = (id) => {
        setCurrentlyEditing(id)
    }

    const onDeleteClick = async (index) => {
        let newId = words[index]._id
        setId(newId)
        console.log("function Id", newId)
        try {
            let newWords = [...words]
            for (let i = 0; i < words.length; i++)
                if (words[i]._id === newId) {
                    newWords.splice(i, 1)
                    setWords(newWords)
                }
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

                    {words.map((item, index) => (
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





                            {currentlyEditing === item._id && <><UpdateWord wordItems={words} wordId={words[index]._id} setWordItems={setWords} onCancel={() => { onEditClick(null) }} selectedLanguage={"Korean"} word={item.targetLanguage} wordNative={item.nativeLanguage} />


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

                            {displayAdd && <><AddWord dateItem={dateItem} wordItems={words} setWordItems={setWords} onCancel={() => { setDisplayAdd(false) }} />

                            </>}
                        </div>
                    </div>
                </div>
            
        </StyledDefaultWordView>
    )
}
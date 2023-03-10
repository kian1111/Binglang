import { useState } from "react"
import { UpdateWord } from "../UpdateWord"
import { StyledDefaultWordView } from "./style"


export const DefaultWordView = () => {
    const [displayEdit, setDisplayEdit] = useState(false)

    return (
        
        <StyledDefaultWordView>
            {!displayEdit &&
            <div>
            
            <label>
                English: words.targetLanguage 
            </label>
                
            
            <label>
                Korean: words.nativeLanguage
            </label>
        
            <button
                type="submit"
                onClick={() => {
                    setDisplayEdit(true)
                }}
            >Edit
            </button>
            
            </div> 
    }
    {displayEdit && <><UpdateWord selectedLanguage={"English"} word={"Papillon"}/>
    <button
     type="submit"
     onClick={() => {
         setDisplayEdit(false)
     }}
    >
        Cancel
    </button>
    </>
}
            </StyledDefaultWordView>



    )
}
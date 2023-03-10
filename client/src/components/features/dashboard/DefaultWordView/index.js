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
                English:
            </label>
            
            <label> 
                words.targetLanguage 
                </label>
            
            <label>
                Korean:
            </label>
            <label> words.NativeLanguage </label>
        
            <button
                type="submit"
                onClick={() => {
                    setDisplayEdit(true)
                }}
            >Edit
            </button>
            
            </div> 
    }
    {displayEdit && <><UpdateWord/>
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
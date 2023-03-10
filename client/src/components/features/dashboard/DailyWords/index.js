import { useState } from "react"
import { AddWord } from "../AddWord"
import { DefaultWordView } from "../DefaultWordView"
import { StyledDailyWords } from "./style"





export const DailyWords = () => {
    const [displayWord, setDisplayWord] = useState("default")
    const [displayAdd, setDisplayAdd] = useState(false)




    return (
        <StyledDailyWords>
            DailyWords <br />
            <div className="grid-container" >
                <div className="grid-item">
                    {displayWord === "default" && <DefaultWordView />}
                </div>
                <div className="my-div">
                    {!displayAdd && <button
                        type="submit"
                        onClick={() => {
                            setDisplayAdd(true)
                        }}>
                        <i class="fa-solid fa-plus fa-3x"></i>
                    </button>}

                    {displayAdd && <><AddWord onCancel={() => {setDisplayAdd(false)}} />
                        
                    </>}
                </div>

            </div>

        </StyledDailyWords>
    )
}
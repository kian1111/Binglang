import { useState } from "react"
import { StyledAddLanguage } from "./style"


export const AddLanguage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('Korean')
    const listLanguages = ["English", "French", "Korean", "Japanese"]
    const [word,setWord] = useState('')

    function handleUserSelection(e) {
        let current = e.target.options.selectedIndex
        setSelectedLanguage(e.target.options[current].getAttribute('data-key'))
    }

    return (
        <StyledAddLanguage>
        <select value={selectedLanguage} onChange={(e) => handleUserSelection(e)}>
                    <option value=""></option>
                    {listLanguages.map((language, index) => (
                        <option key={index} data-key={language} value={language}>{language}</option>
                    ))}
                </select>
                <text> :</text>
                <input
                    className="input"
                    type="text"
                    value={word}
                    onChange={e => setWord(e.target.value)}
                    placeholder=" "
                />
                <button
                type="submit"
                name="delete"
                onClick={(event) => {

                }
                }
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
        </StyledAddLanguage>
    )
}
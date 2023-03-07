import { useState } from "react"
import { AddLanguage } from "../AddLanguage"
import { StyledAddWord } from "./style"
import { useFormik } from "formik"
import * as yup from 'yup'


export const AddWord = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('Korean')
    const listLanguages = ["English", "French", "Korean", "Japanese"]
    const [word, setWord] = useState('')
    const [addLanguage, setAddLanguage] = useState(0)

    const formik = useFormik({
        initialValues: {
            wor: ""
        },

        validationSchema: yup.object({
            "wor":yup.string().required()
        }),

        onSubmit: async (values) => {
            //TODO
        }
    })

    

    const handleSubmit = async event => {
        event.preventDefault()
        setAddLanguage(addLanguage + 1)

    }

    const addLanguageComponents = [];
    for (let i = 0; i < addLanguage; i++) {
        addLanguageComponents.push(<AddLanguage key={i} />);
    }

    function handleUserSelection(e) {
        let current = e.target.options.selectedIndex
        setSelectedLanguage(e.target.options[current].getAttribute('data-key'))

    }
    return (
        <StyledAddWord>
            <form onSubmit={formik.handleSubmit}>


                <div class="form-group">
                    <label for="inputfield">
                        English :
                    </label>
                    <input
                        id="inputfield"
                        className="input"
                        type="text"
                        value={word}
                        onChange={e => setWord(e.target.value)}
                        placeholder=" "
                    />
                </div>
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
                {addLanguageComponents}

                <p>
                    <button background-color="#4CAF50"
                        className="submit-button"
                        type="submit"
                        name="AddLanguage"
                        onClick={(event) => {

                        }
                        }

                    >
                        Add language
                    </button>
                </p>
                <p>
                    <button background-color="#4CAF50"
                        className="submit-button"
                        type="submit"
                        name="AddWord"
                        onClick={(event) => {

                        }
                        }

                    >
                        Submit
                    </button>
                </p>
            </form>
        </StyledAddWord>

    )
}
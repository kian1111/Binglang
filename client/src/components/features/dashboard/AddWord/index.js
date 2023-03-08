import { useState } from "react"
import { AddLanguage } from "../AddLanguage"
import { StyledAddWord } from "./style"
import { useFormik } from "formik"
import * as yup from 'yup'


export const AddWord = () => {

    const listLanguages = ["English", "French", "Korean", "Japanese"]
    const [addLanguage, setAddLanguage] = useState(0)
    const [buttonClicked, setButtonClicked] = useState("")
    const [addLanguageComponents, setAddLanguageComponents] = useState([]);



    const formik = useFormik({
        initialValues: {
            word: "",
            selectedLanguage: "Korean"
        },

        validationSchema: yup.object({
            word: yup.string().max(25, "max 25 characters").required("required"),
            wordNative: yup.string().max(25, "max 25 characters").required("required")
        }),

        onSubmit: async (name) => {
            if (buttonClicked === "addLanguage") {
                setAddLanguage(addLanguage + 1)
            }


        }
    })

    const handleDelete = (index) => {
        const newComponents = [...addLanguageComponents];
        newComponents.splice(index, 1);
        setAddLanguageComponents(newComponents)
    };


    for (let i = 0; i < addLanguage; i++) {
        addLanguageComponents.push(<><AddLanguage key={i} selectedLanguage={formik.values.selectedLanguage} /><button
            type="submit"
            onClick={() => {handleDelete(i)
            setButtonClicked("delete")
            console.log("clicked")}}>X</button>
        </>
        );
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
                        name="word"
                        type="text"
                        value={formik.values.word}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder=" "
                    />
                </div>
                {formik.touched.word && formik.errors.word ? <p className="error">{formik.errors.word}</p> : null}

                <select name="selectedLanguage" value={formik.values.selectedLanguage} onChange={formik.handleChange}>
                    <option value=""></option>
                    {listLanguages.map((language, index) => (
                        <option key={index} data-key={language} value={language}>{language}</option>
                    ))}
                </select>
                <text> :</text>
                <input
                    className="input"
                    type="text"
                    name="wordNative"
                    value={formik.values.wordNative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder=" "
                />
                {formik.touched.wordNative && formik.errors.wordNative ? <p className="error">{formik.errors.wordNative}</p> : null}
                {addLanguageComponents}

                <p>
                    <button background-color="#4CAF50"
                        className="submit-button"
                        type="submit"
                        name="AddLanguage"
                        value="addLanguage"
                        onClick={e => setButtonClicked(e.target.value)}
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
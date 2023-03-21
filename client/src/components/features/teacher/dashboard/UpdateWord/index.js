import { useFormik } from "formik"
import { useState } from "react"
import { StyledUpdateWord } from "./style"
import * as yup from 'yup'
import { AddLanguage } from "../AddLanguage"
import { putWord } from "../../../../../pages/Teacher/TeacherDashboard/action"




export const UpdateWord = ({ word = null, selectedLanguage = null, wordNative = null, onCancel, wordId, wordItems, updateWordItems }) => {
    const listLanguages = ["English", "French", "Korean", "Japanese"]
    const [addLanguage, setAddLanguage] = useState(0)
    const [addLanguageComponents, setAddLanguageComponents] = useState([]);
    const [id, setId] = useState('')


    const formik = useFormik({
        initialValues: {
            wordTarget: word || "",
            selectedLanguage: selectedLanguage || "Korean",
            wordNative : wordNative || ""
        },

        validationSchema: yup.object({
            wordTarget: yup.string().max(25, "max 25 characters").required("required"),
            wordNative: yup.string().max(25, "max 25 characters").required("required")
        }),

        onSubmit: async (name) => {



        }
    })

    const handleSubmit = async e => {
        e.preventDefault();
        
    }

    const onLanguageClick = () => {
        setAddLanguage(addLanguage + 1)
        for (let i = 0; i < addLanguage; i++) {
            setAddLanguageComponents([...addLanguageComponents, <><AddLanguage key={i} selectedLanguage={formik.values.selectedLanguage} 
            onDelete={() => {handleDelete(i)}}/>
            
            </>
            ]);
        }

    }


    const handleDelete = (index) => {
        const newComponents = [...addLanguageComponents];
        newComponents.splice(index, 1);
        setAddLanguageComponents(newComponents)
        setAddLanguage(addLanguage - 1)
    }

    const onUpdateClick = async () => {
        
        try {
            let newWords = [...wordItems]

            await putWord({ _id : wordId, targetLanguage : formik.values.wordTarget, nativeLanguage : formik.values.wordNative })

            for (let i = 0; i < wordItems   .length; i++)
                if (wordItems[i]._id === wordId) {
                    newWords[i].targetLanguage = formik.values.wordTarget
                    newWords[i].nativeLanguage = formik.values.wordNative
                    updateWordItems(newWords)
                    onCancel()
                }

        }
        catch (err) {
            console.log(err);
            alert(err.message);
        }

    }

    return (
        <StyledUpdateWord>
             <div className="div-blue">
            <form >

           
                <div class="form-group">
                    <label for="inputfield">
                        English :
                    </label>
                    <input
                        id="inputfield"
                        className="input"
                        name="wordTarget"
                        type="text"
                        defaultValue={word || ""}
                        value={formik.values.wordTarget}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder={formik.values.wordTarget}
                    />
                </div>
                {formik.touched.wordTarget && formik.errors.wordTarget ? <p className="error">{formik.errors.wordTarget}</p> : null}

                <select name="selectedLanguage" defaultValue={selectedLanguage || ""}
                    value={formik.values.selectedLanguage} onChange={formik.handleChange}>
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
                    defaultValue = {wordNative || ""}
                    value={formik.values.wordNative}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={formik.values.wordNative}
                />
                {formik.touched.wordNative && formik.errors.wordNative ? <p className="error">{formik.errors.wordNative}</p> : null}
            </form>

            <form onSubmit={handleSubmit}>
                {addLanguageComponents}

                <p>
                    <button background-color="#4CAF50"
                        className="submit-button"
                        name="AddLanguage"
                        value="addLanguage"
                        onClick={onLanguageClick}
                    >
                        Add language
                    </button>
                </p>
                <p>
                    <button background-color="#4CAF50"
                        className="submit-button"
                        type="submit"
                        name="AddWord"
                        onClick={() => {
                            onUpdateClick()
                        }
                        }

                    >
                        Submit
                    </button>
                    <button
                        type="submit"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </p>
            </form>
            </div>

            
        </StyledUpdateWord>
    )
}
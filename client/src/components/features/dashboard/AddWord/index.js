import { useEffect, useState } from "react"
import { AddLanguage } from "../AddLanguage"
import { StyledAddWord } from "./style"
import { useFormik } from "formik"
import * as yup from 'yup'
import { addWord } from "../../../../pages/DashBoard/action"
import { DefaultWordView } from "../DefaultWordView"
import { BulkAddWord } from "../../teacher/dashboard/BulkAddWord"


export const AddWord = ({onCancel, dateItem, wordItems, setWordItems}) => {

    const listLanguages = ["English", "French", "Korean", "Japanese"]
    const [addLanguage, setAddLanguage] = useState(0)
    const [addLanguageComponents, setAddLanguageComponents] = useState([]);
    const [words, setWords] = useState (wordItems || {})



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



        }
    })
    

    const handleSubmit = async e => {
        e.preventDefault();
        try {
        let newWord = {targetLanguage : formik.values.word, nativeLanguage : formik.values.wordNative, date : dateItem}
        let data = await addWord(newWord)
        
        setWordItems([...words, { targetLanguage : formik.values.word, nativeLanguage : formik.values.wordNative, date : dateItem, _id: data._id }])
        onCancel()
        }
        catch (err) {
            console.log(err);
            alert(err.message);
        }
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

    useEffect(() => {
        const load = async () => {
          
        };
       
        load();
      },[words] )
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
                        width="200px"
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
            </form>

            <form onSubmit={handleSubmit}>
                {addLanguageComponents}
                <p>
                    <button background-color="#4CAF50"
                        className="submit-button"
                        type="button"
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
                        

                    >
                        Submit
                    </button>
                    <button
                            type="button"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                </p>
            </form>
        </StyledAddWord>

    )
}
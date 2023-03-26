import { useEffect, useState } from "react"
import { AddLanguage } from "../AddLanguage"
import { StyledAddWord } from "./style"
import { useFormik } from "formik"
import * as yup from 'yup'
import { addBulkWords, addWord } from "../../../../../pages/Teacher/TeacherDashboard/action.js"
import { BulkAddWord } from "../BulkAddWord"


export const AddWord = ({ onCancel, dateItem, wordItems, updateWordItems, studentId, studentSettings }) => {

    const listLanguages = ["English", "French", "Korean", "Japanese"]
    const [addLanguage, setAddLanguage] = useState(0)
    const [addLanguageComponents, setAddLanguageComponents] = useState([]);
    const [bulkAdd, setBulkAdd] = useState(false)
    const [bulkWords, setBulkWords] = useState('')




    const formik = useFormik({
        initialValues: {
            word: "",
            selectedLanguage: studentSettings.native_language
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
            if (!bulkAdd) {
                let newWord = { _id: studentId, targetLanguage: formik.values.word, nativeLanguage: formik.values.wordNative, date: dateItem }
                let data = await addWord(newWord)

                updateWordItems([...wordItems, { targetLanguage: formik.values.word, nativeLanguage: formik.values.wordNative, date: dateItem, _id: data._id }])
                onCancel()
            }
            else if (bulkAdd) {
                // Get the textarea element by its ID
                const myTextareaTarget = document.getElementById("myTextareaTarget");

                const myTextareaNative = document.getElementById("myTextareaNative");

                let linesTarget = [" "]

                let linesNative = [" "]
                // Split the textarea content by lines
                if (myTextareaTarget.value) {
                 linesTarget = myTextareaTarget.value.split("\n");
                }
                if (myTextareaNative.value) {
                 linesNative = myTextareaNative.value.split("\n");                    
            }
                

               


                // Split each line by words
                let newWords = []
                for (let i = 0; i < linesTarget.length; i++) {
                    newWords.push({ _id: studentId, targetLanguage: linesTarget[i] ? linesTarget[i].split(" ")[0] : " ", 
                    nativeLanguage: linesNative[i] ? linesNative[i].split(" ")[0] : " ", date: dateItem })
                     
                }

                let data = await addBulkWords({_id : studentId}, newWords)


                updateWordItems([...wordItems, ...newWords])


                // Output the array of words
                onCancel()
            }
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
                onDelete={() => { handleDelete(i) }} />

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

    return (
        <StyledAddWord>

            <form onSubmit={formik.handleSubmit}>


                <div class="form-group">
                    <label for="inputfield">
                        {studentSettings.target_language} :
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
                        vertical-align="top"
                        text-align="left"
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
                    vertical-align="top"
                    text-align="left"
                    id="input-native"
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
            <div>
                <BulkAddWord bulkAdd={bulkAdd} setBulkAdd={setBulkAdd} />
            </div>

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
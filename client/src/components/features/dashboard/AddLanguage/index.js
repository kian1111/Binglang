import { useFormik } from "formik"
import { useState } from "react"
import { StyledAddLanguage } from "./style"
import * as yup from 'yup'



export const AddLanguage = () => {
    const listLanguages = ["English", "French", "Korean", "Japanese"]

    const formik = useFormik({
        initialValues: {
            word: "",
            selectedLanguage: "Korean"
        },

        validationSchema: yup.object({
            word: yup.string().max(25, "max 25 characters").required("required"),
            wordNative: yup.string().max(25, "max 25 characters").required("required")
        }),

        onSubmit: async () => {


        }
    })

    return (
        <StyledAddLanguage>
            <select value={formik.values.selectedLanguage} onChange={formik.handleChange}>
                <option value=""></option>
                {listLanguages.map((language, index) => (
                    <option key={index} data-key={language} value={language}>{language}</option>
                ))}
            </select>
            <text> :</text>
            <input
                className="input"
                type="text"
                name="word"
                value={formik.values.word}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=" "
            />
            
            {formik.touched.word && formik.errors.word ? <p className="error">{formik.errors.word}</p> : null}
        </StyledAddLanguage>
    )
}
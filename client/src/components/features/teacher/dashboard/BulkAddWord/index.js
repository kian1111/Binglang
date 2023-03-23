import { useState } from "react";
import { StyledBulkAddWord } from "./style"



export const BulkAddWord = ({bulkAdd, setBulkAdd}) => {
    const [displayBulk, setDisplayBulk] = useState(true)

    const increaseHeight = () => {
        const inputTarget = document.getElementById("inputfield");
        const inputNative = document.getElementById("input-native");

        var parentTarget = inputTarget.parentNode;
        var parentNative = inputNative.parentNode;


        var textareaTarget = document.createElement("textarea");
        var textareaNative = document.createElement("textarea");

        textareaTarget.setAttribute("id", "myTextareaTarget");
        textareaTarget.setAttribute("rows", "4");
        textareaTarget.setAttribute("cols", "50");
        textareaTarget.style.width = "200px"
        textareaTarget.style.height = "200px"
        textareaTarget.value = inputTarget.value;

        textareaNative.setAttribute("id", "myTextareaNative");
        textareaNative.setAttribute("rows", "4");
        textareaNative.setAttribute("cols", "50");
        textareaNative.style.width = "200px"
        textareaNative.style.height = "200px"
        textareaNative.value = inputNative.value;

        parentTarget.replaceChild(textareaTarget, inputTarget);
        parentNative.replaceChild(textareaNative, inputNative);

        setDisplayBulk(false)
        setBulkAdd(true)
        console.log("child Component BulkaddValue", bulkAdd)
    }

    const onCancel = () => {
        const textAreaTarget = document.getElementById("myTextareaTarget");
        const textAreaNative = document.getElementById("myTextareaNative");

        const inputTarget = document.getElementById("inputfield");
        const inputNative = document.getElementById("input-native");

        textAreaTarget.replaceWith(inputTarget);
        textAreaNative.replaceWith(inputNative);

        setDisplayBulk(true)
        setBulkAdd(false)
    }

    const submitBulkWords = () => {
    // Get the textarea element by its ID
    const myTextarea = document.getElementById("myTextarea");

    // Split the textarea content by lines
    const lines = myTextarea.value.split("\n");

    // Split each line by words
    const words = [];
    for (let i = 0; i < lines.length; i++) {
        const lineWords = lines[i].split(" ");
        words.push(...lineWords);
    }

    // Output the array of words
    console.log(words);

    }
    
    return (

        <StyledBulkAddWord>
            {!displayBulk && <button onClick={onCancel}>Cancel Bulk Add</button>}


            {displayBulk && <button onClick={increaseHeight}>Bulk Add</button>}


        </StyledBulkAddWord>
    )
}
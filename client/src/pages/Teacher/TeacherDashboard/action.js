import api from "../../../utils/api";

export const wordList = async ({_id,startDate, endDate}) =>  {

    console.log("id", _id)
    const {data} = await api.get(`/teacher/student/word?startDate=${formatDate(startDate)}&endDate=${formatDate(endDate)}&_id=${(_id)}`)


    return data.studentWordList;
    
}

export const addWord = async ({_id, targetLanguage, nativeLanguage, date, addedLanguages}) => {

    const {data} = await api.post("/teacher/student/word/", {_id, targetLanguage, nativeLanguage, date, addedLanguages});

    return data;

}

export const deleteWord = async ({_id}) => {
    
    await api.delete("/word/"+_id);
    
}

export const putWord = async ({_id, targetLanguage, nativeLanguage}) => {
    
    console.log("action",_id)

    await api.put("/word/"+_id, {targetLanguage, nativeLanguage});
    
}

export const studentList = async ({_id}) =>  {


    const {data} = await api.get("/teacher/student/", {_id})


    return data.studentList;
    
}


export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    
    return [year, month, day].join('-');
  }
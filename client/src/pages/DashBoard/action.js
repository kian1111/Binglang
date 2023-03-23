import api from "../../utils/api";

export const wordList = async ({_id,startDate, endDate}) =>  {


    const {data} = await api.get(`/word?startDate=${formatDate(startDate)}&endDate=${formatDate(endDate)}`, {_id})


    return data.wordList;
    
}

export const addWord = async ({targetLanguage, nativeLanguage, date, addedLanguages}) => {

    const {data} = await api.post("/word/", {targetLanguage, nativeLanguage, date, addedLanguages});

    return data;

}

export const deleteWord = async ({_id}) => {
    
    await api.delete("/word/"+_id);
    
}

export const putWord = async ({_id, targetLanguage, nativeLanguage}) => {
    
    console.log("action",_id)

    await api.put("/word/"+_id, {targetLanguage, nativeLanguage});
    
}

export const studentSettings = async ({_id}) =>  {


    const {data} = await api.get("/settings/", {_id})


    return data.studentSettings;
    
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
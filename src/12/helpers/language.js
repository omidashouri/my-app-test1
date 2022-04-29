import {Configs} from "../config";
import {Languages} from "../languages";


export const getCurrentLang = ()=>{
    const lang = localStorage.getItem('language');
    if(!lang){
         localStorage.setItem('language',Configs.DEFAULT_LANGUAGE)
        return Configs.DEFAULT_LANGUAGE;
    }
    return lang;
}

export const lang = (key, lang = getCurrentLang()) =>{
    //objectName.propertyName
    //or
    //objectName["propertyName"]
    return Languages[lang][key];
}
import {useState} from "react";

export const useChangeInput = (initialValue) => {

    const [value, setValue] = useState(initialValue);
    const setChangeName = (e) => {
        setValue(e.target.value);
    };
    return [value, setChangeName];
}
import {createContext, useEffect, useState} from "react";


export const GlobalContext = createContext({
    searchParam: '',
    handleOnChange: () => {
    },
    handleSubmit: () => {
    },
    movieList: [],
    loading: false
})

const GlobalState = ({children}) => {

    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const getDataFromStorage = JSON.parse(localStorage.getItem('movieList'));
        if (getDataFromStorage && getDataFromStorage.length > 0) {
            setMovieList(getDataFromStorage);
        }
    }, [])

    const handleOnChange = (event) => {
        console.log(event.target.value)
        setSearchParam(event.target.value)
    }

    const handleSubmit = async () => {
        setLoading(true)
        const response = await fetch(`https://www.omdbapi.com/?s=${searchParam}&apikey=53447d77`)
        const data = await response.json();
        if (data) {
            setMovieList(data.Search);
            localStorage.setItem('movieList', JSON.stringify(data.Search))
            setLoading(false);
            setSearchParam('')
        }
    }

    const contextValue = {
        searchParam,
        handleOnChange,
        handleSubmit,
        movieList,
        loading,
    }

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import "./App.css"
import {useContext} from "react";
import {GlobalContext} from "./GlobalContext";

function MovieApp() {
    const {movieList} = useContext(GlobalContext)
    return (
        <div style={{background : movieList && movieList.length > 0 && "blue"}}>
            <Search/>
            <MovieList/>
        </div>
    )
}

export default MovieApp;
import React, {useContext} from "react";
import {GlobalContext} from "../GlobalContext";

const MovieList = () => {
    const {movieList, loading} = useContext(GlobalContext);
    return (
        <div className={'movieList'}>
            {loading && <span className={'noMovie'}>Loading! Please wait</span>}
            {
                movieList && movieList.length > 0 ?
                    movieList.map((item) => (
                        <div key={item.imdbID}>
                            <img src={item.Poster} alt={'Movie Poster'}/>
                            <p>{item.Title}</p>
                            <p>{item.Year}</p>
                        </div>
                    )) : null
            }
        </div>
    )
}

export default MovieList;
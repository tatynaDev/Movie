import React, {useContext} from 'react';
import  {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../lib/ApiKey";
import MovieCard from "./pages/MovieCard";
import {LanguageContext} from "../context";

const Popular = () => {
    const {language} = useContext(LanguageContext)
    const [popular, setPopular] = useState([])
    const buttons = [1,2,3,4,5,6,7,8,9,10]
    const [currentPage, setCurrentPage] = useState([])
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${currentPage}`)
        const {data} = await url
        await setPopular(data.results)
    }


    useEffect(() => {
        getPopular()
    }, [language, currentPage])
    console.log(popular)

    return (
        <div id='movies'>
            <div className="container">
                <div className="movies">
                    {
                        popular.map(el => (
                            <MovieCard el={el} key={el.id}/>
                        ))
                    }
                </div>
                <div className="pagination">
                    {
                        buttons.map((el, idx) => (
                            <button className={currentPage === idx + 1 ? "active" : ""}
                                onClick={() => {
                                setCurrentPage(el)
                                setTimeout(() =>  window.scroll(0,0), 1000)}}
                            >{el}</button>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
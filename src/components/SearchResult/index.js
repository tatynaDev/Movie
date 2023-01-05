import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import MovieCard from "../pages/MovieCard";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {LanguageContext} from "../../context";

const SearchResult = () => {
    const [result, setResult] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const {language} = useContext(LanguageContext)
    const {movieName} = useParams()


    const getResults = async (name, apikey) => {
        const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${name}&language=${language}&page=${currentPage}`)
        const {data} = await url
        setTotalPages(data.total_pages)
        setResult(data.results)
    }

    useEffect(() => {
        getResults(movieName, APIKEY)
    }, [movieName, currentPage, language])
    console.log(result)

    useEffect(() => {
        setCurrentPage(1)
    }, [movieName])


    return (
        <div className="container">
          <div id="movies">
              <div className="movies">
                  {
                      result.map(el => <MovieCard el={el}/>)
                  }
              </div>
              <div style={{display:"flex", justifyContent:"space-between", padding:"5% 0 5% 0"}}>

                  <button style={{
                      visibility: currentPage === 1 ? "hidden" : "visible"
                  }} onClick={() => {
                      setCurrentPage(currentPage - 1)
                      setTimeout(() => window.scroll(0,1000),1000)
                  }
                  } className="page-btn"><IoIosArrowBack/><span>Prev</span></button>

                  <button style={{
                      visibility: currentPage === totalPages ? "hidden" : "visible"
                  }}
                      onClick={() => {
                      setCurrentPage(currentPage + 1)
                      setTimeout(() => window.scroll(0,0),1000)
                  }
                  } className="page-btn"><span>Next</span><IoIosArrowForward/></button>
              </div>
          </div>
        </div>
    );
};

export default SearchResult;

//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
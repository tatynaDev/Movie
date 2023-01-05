import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import CastSlider from "./CastSlider";
import ModalWindow from "./ModalWindow";
import MovieVideos from "../MovieVideos/MovieVideos";
import {LanguageContext} from "../../context";


const DetailPage = () => {
    const {language} = useContext(LanguageContext)
    const [detail,setDetail] = useState({})
    const [cast, setCast] = useState([])
    const [modal, setModal] = useState(false)
    const movieId = useParams()
    const getDetail = async (id, key) =>{
        try{
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
            const {data} = await url
            await setDetail(data)
        }catch(e){
            console.log(e)
        }
    }
    const getCast = async (id, key) => {
        try{
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}`)
            const {data} = url
            await setCast(data.cast)
        }catch (e){
            console.error(e)
        }
    }

    useEffect(() =>{
        getDetail(movieId.id, APIKEY)
        getCast(movieId.id, APIKEY)
    },[language])


    const {title, overview, vote_average, release_date,backdrop_path} = detail

    return (

            <>
                <div style={{
                    background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat left/cover`
                }}
                     id="detail-page">
                    <div className="container">
                        <div className="detail-page">

                            <ModalWindow el={detail} setModal={setModal} modal={modal}/>
                            <div className="detail-page--description">
                                <h1 style={{color: "white", textShadow: "7px 7px 7px #C52525FF"}}>{title}</h1>
                                <h2>({release_date ? release_date.substring(0,4) : ""})</h2>
                                <p style={{margin:"20px 0", width: "500px", color: "white"}}>{overview}</p>
                                <div className="rating">
                                    {/*<h3>{vote_average}</h3>*/}
                                    {Math.round(vote_average * 10)}%
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="cast">
                        <CastSlider cast={cast}/>
                        <h1 style={{margin:"50px 0"}}>Trailers</h1>
                        <MovieVideos movieId={movieId}/>
                    </div>
                </div>
            </>
    );
};

export default DetailPage;


//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
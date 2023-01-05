import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import Slider from "react-slick";
import {LanguageContext} from "../../context";

const MovieVideos = ({movieId}) => {
    const [videos, setVideos] = useState([])
    const {language} = useContext(LanguageContext)
    const getVideos = async (id, key) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=${language}`)
        const {data} = await url
        await setVideos(data.results)
    }

    useEffect(() => {
        getVideos(movieId.id, APIKEY)
    }, [language])
    console.log(videos)

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
    };

    return (
        <Slider {...settings}>
        {
            videos.map(el =>(
                <div className="container">
                        <iframe width="300px" height="180px" src={`https://www.youtube.com/embed/${el.key}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                </div>
            ))
        }
        </Slider>
    );
};

export default MovieVideos;

//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
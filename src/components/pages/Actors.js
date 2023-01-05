import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import Slider from "react-slick";
import {LanguageContext} from "../../context";

const Actors = () => {
    const [actor, setActor] = useState({})
    const [movie, setMovie] = useState([])
    const language = useContext(LanguageContext)
    const {actorId} = useParams()

    const getActor = async (id, key) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${language}`)
        const {data} = await url
        await setActor(data)
    }

    const getMovieActor = async (id, key) => {
        const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
        const {data} = await url
        await setMovie(data.cast.slice(0,10))
    }
    console.log(movie)

    useEffect(() => {
        getActor(actorId, APIKEY)
        getMovieActor(actorId, APIKEY)
    }, [language])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4
    };

    // console.log(actor)

    const {biography, birthday, profile_path, name, place_of_birth} = actor;
    console.log(movie)
    return (
       <>
           <div id="actor">
               <div className="container">
                   <div className="actor" style={{display:"flex", margin:"50px 10px"}}>
                       <div>
                           <img style={{width:"300px"}} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`} alt=""/>

                       </div>
                       <div style={{margin:"0 20px"}}>
                           <h2>{name}</h2>

                           <h4 style={{margin:"10px 0"}}>{birthday}</h4>

                           <p style={{margin:"10px 0 0 0", fontSize:"12px"}}>Place of birth:</p>

                           {place_of_birth ? <h5>{place_of_birth}</h5> : ""}

                           <p style={{marginTop:"30px"}}><b>Biography:</b></p>

                           {
                              biography ? <p style={{margin:'10px 0', height:"120px", width:"100%", border:"1px solid #ccc", font:"16px/26px Georgia, Garamond, Serif", overflow:"auto", padding:"10px"}}>{biography}</p> : <p style={{margin:'10px 0 30px 0'}}>We have no biography for <b>{name}</b></p>
                           }

                           <div>
                           </div>
                       </div>


                   </div>
                   <Slider {...settings}>
                       {
                           movie.map(el =>(
                               <div key={el.id}>
                                   <Link to={`/movies/movie-detail/${el.id}`}>
                                       <img width={150} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>
                                   </Link>
                                   <h4 style={{width:"150px", textAlign:"center"}}>{el.title}</h4>
                               </div>
                           ))
                       }
                   </Slider>
               </div>
           </div>
       </>
    );
};

export default Actors;
import React, {useState} from 'react';
import {Link} from "react-router-dom";


const MovieCard = ({el}) => {

    const [star, setStar] = useState(0)
    let arr = [1,2,3,4,5]

    return (
        <div className="card">

            <Link to={`/movies/movie-detail/${el.id}`}>
                <img className="card-img" style={{width: "250px", boxShadow: "0px 0px 30px 4px #000000"}} src={`https://www.themoviedb.org/t/p/w440_and_h660_face${el.poster_path}`} alt=""/>
            </Link>

            <div style={{padding:"10px 20px"}}>
                <h4>{el.title}</h4>
                <h6>{el.release_date}</h6>
                <p>{el.vote_average}</p>
            </div>
            <div className="average">
                <div className="average-absolute"></div>

                <div className="stars" >
                    {
                        arr.map(el =>(
                            <div key={el} onClick={() =>{
                                setStar(el)
                            }}
                                style={{color: star >= el ? "yellow" : ""
                            }} className="star">★</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
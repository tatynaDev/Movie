import React from 'react';
import Slider from "react-slick";
import noAva from "../../img/WebStorm.webp"
import {Link} from "react-router-dom";


const CastSlider = ({cast}) => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500
    };

    return (
        <Slider {...settings}>
            {
                cast.map(el => (
                    <div key={el.id}>
                            {
                                el.profile_path ? <Link to={`/actors/actor/${el.id}`}><img style={{width: "180px"}} src={`https://www.themoviedb.org/t/p/w276_and_h350_face${el.profile_path}`} alt=""/></Link>
                                    : <Link to={`/actors/actor/${el.id}`}><img style={{width: "180px", height: "230px"}} src={noAva} alt=""/></Link>
                            }
                            <h4 style={{width:"180px", textAlign:"center", margin:"10px 0"}}>{el.name}</h4>
                    </div>
                ))
            }
        </Slider>
    );
};

export default CastSlider;
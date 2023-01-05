import React, {useState} from 'react';
import {BsFillStarFill} from "react-icons/bs";

const ModalWindow = ({el, modal, setModal}) => {
    const [star, setStar] = useState(0)
    let arr = [1,2,3,4,5]
    return (
        <>
            <div onClick={() => setModal(!modal)} className="detail-page--img">
                <img style={{width: "400px", boxShadow: "0px 0px 30px 4px #C52525FF"}} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`} alt=""/>
            </div>

            <div style={{display: modal ? "block" : "none"}} id="blur-window">

            </div>

            <div style={{
                transform: modal ? "scale(1)" : "scale(0)",
                transition:".2s"
            }} className="modal">
                <img style={{width: "330px"}} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`} alt=""/>
                <div className="modal--description">
                    <div onClick={() => setModal(false)} className="modal--description__close-btn">&times;</div>
                    <h3 style={{textAlign:"start"}}>{el.title}</h3>
                   <div style={{display:"flex", flexDirection:"start", margin:"10px 0", background:"gray", width:"80px"}}>
                       {
                           arr.map(el =>(
                               <BsFillStarFill key={el} onClick={() =>{
                                   setStar(el)
                               }}
                                               style={{color: star >= el ? "yellow" : "",

                                               }} className="star"/>
                           ))
                       }
                   </div>
                </div>
            </div>
        </>
    );
};

export default ModalWindow;
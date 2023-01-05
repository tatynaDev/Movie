import React, {useContext, useRef, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../context";

const Header = ({toggleThemes, theme}) => {
    const [value, setValue] = useState('')
    const {setLanguage} = useContext(LanguageContext)
    const input = useRef(null)
    const changeLanguage = (e) => setLanguage(e.target.value)
    const navigate = useNavigate()
    const handleClick = (name) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        if(value !== ""){
            navigate(`/movies/search-result/${name}`)
        }
        input.current.value = ""
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <NavLink to={"/"}>
                        <div className="header-logo">
                            <h1>Assembled</h1>
                        </div>
                    </NavLink>

                    <div className="search-movie">
                        <input className="searchInput" onChange={(e) => setValue(e.target.value)} ref={input} type="search"/>
                        <button onClick={() => {
                            handleClick(value)
                        }}>search</button>
                    </div>

                    <div className="right-site">
                        <nav className="header-nav">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/recipes"}>Recipes</NavLink>
                            <NavLink to={"/popular"}>Popular</NavLink>
                            <NavLink to={"/NowPlaying"}>NowPlaying</NavLink>
                            <NavLink to={"/blog"}>Blog</NavLink>
                            <NavLink to={"/support"}>Support</NavLink>
                        </nav>



                        <div className="header-buttons">
                            <button style={{border:"2px solid #40AB7E", color:"#40AB7E"}} onClick={(event) => toggleThemes(event)} className="dark-mode">{theme === "light" ? "dark" : "light"}</button>
                            <select style={{borderRadius:"50%", padding:"10px 0", margin:"5px", background:"transparent", color:"#40AB7E", border:"2px solid #40AB7E"}} onChange={changeLanguage}>
                                <option value="en-US">EN</option>
                                <option value="ru-RU">RU</option>
                                <option value="tr-TR">TR</option>
                                <option value="fr-FR">FR</option>
                                <option value="ar-AE">AR</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
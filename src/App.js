import './App.scss';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import NowPlaying from "./components/NowPlaying";
import Blog from "./components/Blog";
import Support from "./components/Support";
import DetailPage from "./components/pages/DetailPage";
import Actors from "./components/pages/Actors";
import SearchResult from "./components/SearchResult";
import {useState} from "react";

function App() {

    // const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')) || false)
    // const changeMode = (mode) =>{
    //     localStorage.setItem('mode', JSON.stringify(!mode))
    //     setMode(!mode)
    // }
    const [themes, setThemes] = useState('light')
    const toggleThemes = () =>{
        setThemes(themes => themes === "light" ? "dark" : "light")
    }
    return (
   <themeContext>
       <div className="App" id={themes} >
           <Header toggleThemes={toggleThemes} theme={themes}/>
           <Routes>
               <Route path={"/"} element={<Home />}/>
               <Route path={"/recipes"} element={<Recipes/>}/>
               <Route path={"/popular"} element={<Popular/>}/>
               <Route path={"/NowPlaying"} element={<NowPlaying/>}/>
               <Route path={"/blog"} element={<Blog/>}/>
               <Route path={"/support"} element={<Support/>}/>
               <Route path={"/movies/movie-detail/:id"} element={<DetailPage/>}/>
               <Route path={"/actors/actor/:actorId"} element={<Actors/>}/>
               <Route path={"/movies/search-result/:movieName"} element={<SearchResult/>}/>
           </Routes>
       </div>
   </themeContext>
  );
}
export default App;

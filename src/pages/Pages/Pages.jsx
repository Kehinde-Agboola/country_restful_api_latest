import React from "react";
import Home from "../Home/Home";
import Details from "../Details/Details";
import Countries from "../../component/Countries/Countries";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
const Pages = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />   
        <Route path='/countries/:type' element={<Countries/>}/>
        <Route path='/details/:name' element={<Details/>} />
        </Routes>
        </BrowserRouter>
      
    )
}

export default Pages;
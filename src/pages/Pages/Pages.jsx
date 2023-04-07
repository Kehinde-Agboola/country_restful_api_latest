import React from "react";
import Home from "../Home/Home";
import Details from "../Details/Details";
import {Route, Routes} from 'react-router-dom'
const Pages = () =>{
    return(
        <>
        <Routes>
        <Route path='/' element={<Home/>} >
        <Route path='/' element={<Home/>}  > 
        <Details/>
        </Routes>
       
        </>
    )
}

export default Pages;
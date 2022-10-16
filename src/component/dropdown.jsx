import React from 'react'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// import Home from './home'
// import About from './about'
// import Contact from './contact'
// import Form from './form'
import {Link } from "react-router-dom"

export default function DropDown() {

    const myFunction=()=>{
        document.querySelector("#btn-down").classList.add("show")
        document.querySelector("#btn-down").classList.remove("drop-down")
    }
    return (
        <div>
            <div className='drop-down-bar'>
                <div className='menu'>
                    <button onClick={myFunction}>DropDown</button>
                </div>
                <div id='btn-down' className='drop-down'>
                    <li><Link to="" className='nav-itemm'>Home</Link></li>
                    <li><Link to="/about" className='nav-itemm'>About</Link></li>
                    <li><Link to="/contact" className='nav-itemm'>Contact</Link></li>
                </div>
            </div>
        </div>
    )
}

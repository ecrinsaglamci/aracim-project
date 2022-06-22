import React, { useState } from 'react'
import CarVideo from "../../assets/CarVideo.mp4";
import '../styled/Home.css';
import {  Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Section } from './Section';


function Home() {
  return (
  <div>
    <Navbar/>
    <div className='home'>
        
        <div className='overlay'></div>
        <video src={CarVideo} autoPlay loop muted/>
        <div className='content'>
            <h1>Aracim.com'a Hoşgeldin</h1>
            <p>Hadi sana uygun aracı bulalım!</p>
            <Link to="/login"> 
            <button className="baslaBtn">Giriş Yap {'->'}</button>
            </Link>
            <Link to="/register"> 
            <button className="baslaBtn">Kayıt Ol {'->'}</button>
            </Link>
            <Link to="/cars">
            <button className="baslaBtn">Araçlara Göz At {'->'}</button>
            </Link>
        </div>
    </div>
    </div>

   
  )
}

export default Home;

import React, { useState, useEffect } from "react"
import './Home.css'
import vinyl from './vinyl.png'

function Home() {
  return (
    <div>
      <header>
        <h1 id="name">Vinylly.</h1>
        <a href="shop">SHOP</a>
        <a href="about">ABOUT</a>
        <a href="checkout">CHECKOUT</a>
      </header>
      <div id="body">
        <img alt='' src={vinyl}></img>
        <h1>EXPLORE THE SOUND</h1>
      </div>
    </div>
  );
}

export default Home;

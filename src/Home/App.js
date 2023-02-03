import React from "react"
import './Home.css'
import vinyl from './vinyl.png'
import bag from '../icons/bag.png'

function App({cart}) {

  return (
    <div>
      <header>
          <h1 onClick={() => window.location.href='/'} id="name">Vinylly.</h1>
          <a href="/">HOME</a>
          <a href="shop">SHOP</a>
          <a href="about">ABOUT</a>
          <a href="checkout">CHECKOUT <span><div>{cart.length}</div></span></a>
          <div  onClick={() => window.location.href='/checkout'} id='bag'>
            <img alt='' src={bag}></img>
            <div>{cart.length}</div>
          </div>
      </header>
      <div id="screen">
        <img id='record' alt='' src={vinyl}></img>
        <h1>EXPLORE THE SOUND</h1>
        <h3>Listen to your favorite vinyl records unlike ever before</h3>
        <button onClick={() => window.location.href='/shop'}>Shop Now</button>
      </div>
    </div>
  );
}

export default App;

//import React
import React, { useState, useEffect } from 'react'
import './Shop.css'
import songData from './songData.js'

let curYear = new Date().getFullYear()

function Shop({pushToCart, cart}) {
    let [items, setItems] = useState(cart.length)

    
    function rndNum(num) {
        return Math.round((num + Number.EPSILON) * 100)/ 100;
    }

    return (
        <div>
            <header>
                <h1 id="name">Vinylly.</h1>
                <a href="shopapp">HOME</a>
                <a href="shop">SHOP</a>
                <a href="about">ABOUT</a>
                <a href="checkout">CHECKOUT <span><div>{items}</div></span></a>
            </header>
            <div id='latest'>
                <h1>Popular Vinyls</h1>
            </div>
            <div id="body">
                <div id="collection">
                    {songData.map((song) => {
                        function addToCart() {
                            setItems(prevItems => prevItems + 1)
                            cart.push(song.id)
                            localStorage.setItem('cart', JSON.stringify(cart))
                            console.log(cart)
                        }
                        return (
                            <div key={song.id} className="vinyl">
                                <img alt='' src={song.art}></img>
                                <div></div>
                                <div>
                                </div>
                                <h4>{song.album}</h4>
                                <h3>{song.artist}</h3>
                                <h5>${song.price}</h5>
                                <button onClick={addToCart}>Add To Cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <footer id='footer'>
                <h3>VIANLLY DOES NOT OWN ANY COPYRIGHTS TO THE MUSIC FEATURED HERE</h3>
                <h3>VINALLY © {curYear}</h3>
            </footer>
        </div>
    )
}

export default Shop
//import React
import React, { useState } from 'react'
import './Shop.css'
import songData from './songData.js'

let curYear = new Date().getFullYear()

function Shop({ cart}) {
    let [items, setItems] = useState(cart.length)
    let [play, setPlay] = useState(0)

    return (
        <div>
            <header>
                <h1 id="name">Vinylly.</h1>
                <a href="/">HOME</a>
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

                        function playSong() {
                            setPlay(prevPlay => prevPlay + 1)
                            if (play % 2 === 0) {
                                song.song.play()
                            } else {
                                song.song.pause()
                                song.song.load()
                            }
                        }

                        return (
                            <div key={song.id} className="vinyl">
                                <img onMouseEnter={playSong} onMouseLeave={playSong} alt='' src={song.art}></img>
                                <div></div>
                                <div>
                                </div>
                                <h4>{song.album}</h4>
                                <h3>{song.artist}</h3>
                                <h5>${song.price}</h5>
                                <button id="atc" onClick={addToCart}>Add To Cart</button>
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
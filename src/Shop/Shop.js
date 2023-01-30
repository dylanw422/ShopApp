//import React
import React, { useState, useEffect } from 'react'
import './Shop.css'

//import cover art
import nirvana from './vinyls/teenspirit.jpg'
import astley from './vinyls/RickAstley.jpg'
import eagles from './vinyls/eagles.jpg'
import weeknd from './vinyls/weeknd.png'
import bep from './vinyls/bep.png'
import divide from './vinyls/divide.png'
import maroon from './vinyls/maroon.png'
import adele from './vinyls/adele.png'
import nickelback from './vinyls/nickelback.jpg'
import kanye from './vinyls/kanye.jpg'
import drake from './vinyls/drake.jpg'
import bruno from './vinyls/bruno.png'
import post from './vinyls/post.jpg'
import mj from './vinyls/mj.png'
import eminem from './vinyls/eminem.jpg'

//import audio
import nirvanaSong from './songs/nirvana.mp3';
import astleySong from './songs/astley.mp3';
import hotelSong from './songs/hotel.mp3'
import lightsSong from './songs/lights.mp3'
import peasSong from './songs/peas.mp3'

//define audio
let playAstleySong = new Audio(astleySong)
let playNirvanaSong = new Audio(nirvanaSong)
let playHotelSong = new Audio(hotelSong)
let playLightsSong = new Audio(lightsSong)
let playPeasSong = new Audio(peasSong)

let total = 0

function Shop() {
    let [items, setItems] = useState(0)

    //cart counter
    function addToCart() {
        setItems(prevItems => prevItems + 1)
    }

    //play states
    const [playNirvana, setPlayNirvana] = useState(1)
    const [playAstley, setPlayAstley] = useState(1)
    const [playHotel, setPlayHotel] = useState(1)
    const [playLights, setPlayLights] = useState(1)
    const [playPeas, setPlayPeas] = useState(1)

    //play useEffects
    useEffect(() => {
        if (playNirvana % 2 === 0) {
            playNirvanaSong.play()
        } else {
            playNirvanaSong.pause()
            playNirvanaSong.load()
        }
    }, [playNirvana])

    useEffect(() => {
        if (playAstley % 2 === 0) {
            playAstleySong.play()
        } else {
            playAstleySong.pause()
            playAstleySong.load()
        }
    }, [playAstley])

    useEffect(() => {
        if (playHotel % 2 === 0) {
            playHotelSong.play()
        } else {
            playHotelSong.pause()
            playHotelSong.load()
        }
    }, [playHotel])

    useEffect(() => {
        if (playLights % 2 === 0) {
            playLightsSong.play()
        } else {
            playLightsSong.pause()
            playHotelSong.load()
        }
    }, [playLights])

    useEffect(() => {
        if (playPeas % 2 === 0) {
            playPeasSong.play()
        } else {
            playPeasSong.pause()
            playPeasSong.load()
        }
    })

    return (
        <div>
            <header>
                <h1 id="name">Vinylly.</h1>
                <a href="shopapp">HOME</a>
                <a href="shop">SHOP</a>
                <a href="about">ABOUT</a>
                <a href="checkout">CHECKOUT <span><div>{items}</div></span></a>
            </header>
            <div id="latest">
                <h1>Latest Vinyls</h1>
            </div>
            <div id="body">
                <div id="collection">
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayNirvana(playNirvana + 1)} onMouseLeave={() => setPlayNirvana(playNirvana + 1)} alt='' src={nirvana} style={{width: '250px'}}></img>
                        <h4>Smells Like Teen Spirit</h4>
                        <h3>Nirvana</h3>
                        <h5>$12.99</h5>
                        <button onClick={() => {addToCart(); total+=12.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayAstley(playAstley + 1)} onMouseLeave={() => setPlayAstley(playAstley + 1)} alt='' src={astley} style={{width: '250px'}}></img>
                        <h4>Never Gonna Give You Up</h4>
                        <h3>Rick Astley</h3>
                        <h5>$9.99</h5>
                        <button onClick={() => {addToCart(); total+=9.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayHotel(playHotel + 1)} onMouseLeave={() => setPlayHotel(playHotel + 1)} alt='' src={eagles} style={{width: '250px'}}></img>
                        <h4>Hotel California</h4>
                        <h3>The Eagles</h3>
                        <h5>$14.99</h5>
                        <button onClick={() => {addToCart(); total+=14.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayLights(playLights + 1)} onMouseLeave={() => setPlayLights(playLights + 1)} alt='' src={weeknd} style={{width: '250px'}}></img>
                        <h4>Blinding Lights</h4>
                        <h3>The Weeknd</h3>
                        <h5>$10.99</h5>
                        <button onClick={() => {addToCart(); total+=10.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayPeas(playPeas + 1)} onMouseLeave={() => setPlayPeas(playPeas + 1)} alt='' src={bep} style={{width: '250px'}}></img>
                        <h4>The E.N.D</h4>
                        <h3>The Black Eyed Peas</h3>
                        <h5>$9.49</h5>
                        <button onClick={() => {addToCart(); total+=9.49}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={divide} style={{width: '250px'}}></img>
                        <h4>Divide</h4>
                        <h3>Ed Sheeran</h3>
                        <h5>$12.99</h5>
                        <button onClick={() => {addToCart(); total+=12.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={maroon} style={{width: '250px'}}></img>
                        <h4>Overexposed</h4>
                        <h3>Maroon 5</h3>
                        <h5>$13.49</h5>
                        <button onClick={() => {addToCart(); total+=13.49}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={adele} style={{width: '250px'}}></img>
                        <h4>21</h4>
                        <h3>Adele</h3>
                        <h5>$16.99</h5>
                        <button onClick={() => {addToCart(); total+=16.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={nickelback} style={{width: '250px'}}></img>
                        <h4>All The Right Reasons</h4>
                        <h3>Nickelback</h3>
                        <h5>$11.99</h5>
                        <button onClick={() => {addToCart(); total+=11.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={kanye} style={{width: '250px'}}></img>
                        <h4>808s & Heartbreak</h4>
                        <h3>Kanye West</h3>
                        <h5>$12.49</h5>
                        <button onClick={() => {addToCart(); total+=12.49}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={drake} style={{width: '250px'}}></img>
                        <h4>Take Care</h4>
                        <h3>Drake</h3>
                        <h5>$14.99</h5>
                        <button onClick={() => {addToCart(); total+=14.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={bruno} style={{width: '250px'}}></img>
                        <h4>Doo-Wops & Holligans</h4>
                        <h3>Bruno Mars</h3>
                        <h5>$13.29</h5>
                        <button onClick={() => {addToCart(); total+=13.29}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={post} style={{width: '250px'}}></img>
                        <h4>Stoney</h4>
                        <h3>Post Malone</h3>
                        <h5>$!2.99</h5>
                        <button onClick={() => {addToCart(); total+=12.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={mj} style={{width: '250px'}}></img>
                        <h4>Bad</h4>
                        <h3>Michael Jackson</h3>
                        <h5>$13.99</h5>
                        <button onClick={() => {addToCart(); total+=13.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img alt='' src={eminem} style={{width: '250px'}}></img>
                        <h4>The Eminem Show</h4>
                        <h3>Eminem</h3>
                        <h5>$15.29</h5>
                        <button onClick={() => {addToCart(); total+=15.29}}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
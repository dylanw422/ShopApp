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
import perfectSong from './songs/perfect.mp3'
import nightSong from './songs/night.mp3'
import deepSong from './songs/deep.mp3'
import rockSong from './songs/rock.mp3'
import heartSong from './songs/heart.mp3'
import drakeSong from './songs/drake.mp3'
import grenadeSong from './songs/grenade.mp3'
import postSong from './songs/post.mp3'
import badSong from './songs/bad.mp3'
import eminemSong from './songs/eminem.mp3'

//define audio
let playAstleySong = new Audio(astleySong)
let playNirvanaSong = new Audio(nirvanaSong)
let playHotelSong = new Audio(hotelSong)
let playLightsSong = new Audio(lightsSong)
let playPeasSong = new Audio(peasSong)
let playPerfectSong = new Audio(perfectSong)
let playNightSong = new Audio(nightSong)
let playDeepSong = new Audio(deepSong)
let playRockSong = new Audio(rockSong)
let playHeartSong = new Audio(heartSong)
let playDrakeSong = new Audio(drakeSong)
let playGrenadeSong = new Audio(grenadeSong)
let playPostSong = new Audio(postSong)
let playBadSong = new Audio(badSong)
let playEminemSong = new Audio(eminemSong)

let total = 0

let curYear = new Date().getFullYear()

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
    const [playPerfect, setPlayPerfect] = useState(1)
    const [playNight, setPlayNight] = useState(1)
    const [playDeep, setPlayDeep] = useState(1)
    const [playRock, setPlayRock] = useState(1)
    const [playHeart, setPlayHeart] = useState(1)
    const [playDrake, setPlayDrake] = useState(1)
    const [playGrenade, setPlayGrenade] = useState(1)
    const [playPost, setPlayPost] = useState(1)
    const [playBad, setPlayBad] = useState(1)
    const [playEminem, setPlayEminem] = useState(1)

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
            playLightsSong.load()
        }
    }, [playLights])

    useEffect(() => {
        if (playPeas % 2 === 0) {
            playPeasSong.play()
        } else {
            playPeasSong.pause()
            playPeasSong.load()
        }
    }, [playPeas])

    useEffect(() => {
        if (playPerfect % 2 === 0) {
            playPerfectSong.play()
        } else {
            playPerfectSong.pause()
            playPerfectSong.load()
        }
    }, [playPerfect])

    useEffect(() => {
        if (playNight % 2 === 0) {
            playNightSong.play()
        } else {
            playNightSong.pause()
            playNightSong.load()
        }
    }, [playNight])

    useEffect(() => {
        if (playDeep % 2 === 0) {
            playDeepSong.play()
        } else {
            playDeepSong.pause()
            playDeepSong.load()
        }
    }, [playDeep])

    useEffect(() => {
        if (playRock % 2 === 0) {
            playRockSong.play()
        } else {
            playRockSong.pause()
            playRockSong.load()
        }
    }, [playRock])

    useEffect(() => {
        if (playHeart % 2 === 0) {
            playHeartSong.play()
        } else {
            playHeartSong.pause()
            playHeartSong.load()
        }
    }, [playHeart])

    useEffect(() => {
        if (playDrake % 2 === 0) {
            playDrakeSong.play()
        } else {
            playDrakeSong.pause()
            playDrakeSong.load()
        }
    }, [playDrake])

    useEffect(() => {
        if (playGrenade % 2 === 0) {
            playGrenadeSong.play()
        } else {
            playGrenadeSong.pause()
            playGrenadeSong.load()
        }
    }, [playGrenade])

    useEffect(() => {
        if (playPost % 2 === 0) {
            playPostSong.play()
        } else {
            playPostSong.pause()
            playPostSong.load()
        }
    }, [playPost])

    useEffect(() => {
        if (playBad % 2 === 0) {
            playBadSong.play()
        } else {
            playBadSong.pause()
            playBadSong.load()
        }
    }, [playBad])

    useEffect(() => {
        if (playEminem % 2 === 0) {
            playEminemSong.play()
        } else {
            playEminemSong.pause()
            playEminemSong.load()
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
                        <div></div>
                        <h4>Smells Like Teen Spirit</h4>
                        <h3>Nirvana</h3>
                        <h5>$12.99</h5>
                        <button onClick={() => {addToCart(); total+=12.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayAstley(playAstley + 1)} onMouseLeave={() => setPlayAstley(playAstley + 1)} alt='' src={astley} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>Never Gonna Give You Up</h4>
                        <h3>Rick Astley</h3>
                        <h5>$9.99</h5>
                        <button onClick={() => {addToCart(); total+=9.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayHotel(playHotel + 1)} onMouseLeave={() => setPlayHotel(playHotel + 1)} alt='' src={eagles} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>Hotel California</h4>
                        <h3>The Eagles</h3>
                        <h5>$14.99</h5>
                        <button onClick={() => {addToCart(); total+=14.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayLights(playLights + 1)} onMouseLeave={() => setPlayLights(playLights + 1)} alt='' src={weeknd} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>Blinding Lights</h4>
                        <h3>The Weeknd</h3>
                        <h5>$10.99</h5>
                        <button onClick={() => {addToCart(); total+=10.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayPeas(playPeas + 1)} onMouseLeave={() => setPlayPeas(playPeas + 1)} alt='' src={bep} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>The E.N.D</h4>
                        <h3>The Black Eyed Peas</h3>
                        <h5>$9.49</h5>
                        <button onClick={() => {addToCart(); total+=9.49}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayPerfect(playPerfect + 1)} onMouseLeave={() => setPlayPerfect(playPerfect + 1)} alt='' src={divide} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>Divide</h4>
                        <h3>Ed Sheeran</h3>
                        <h5>$12.99</h5>
                        <button onClick={() => {addToCart(); total+=12.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayNight(playNight + 1)} onMouseLeave={() => setPlayNight(playNight + 1)} alt='' src={maroon} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>Overexposed</h4>
                        <h3>Maroon 5</h3>
                        <h5>$13.49</h5>
                        <button onClick={() => {addToCart(); total+=13.49}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayDeep(playDeep + 1)} onMouseLeave={() => setPlayDeep(playDeep + 1)} alt='' src={adele} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>21</h4>
                        <h3>Adele</h3>
                        <h5>$16.99</h5>
                        <button onClick={() => {addToCart(); total+=16.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayRock(playRock + 1)} onMouseLeave={() => setPlayRock(playRock + 1)} alt='' src={nickelback} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>All The Right Reasons</h4>
                        <h3>Nickelback</h3>
                        <h5>$11.99</h5>
                        <button onClick={() => {addToCart(); total+=11.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayHeart(playHeart + 1)} onMouseLeave={() => setPlayHeart(playHeart + 1)} alt='' src={kanye} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>808s & Heartbreak</h4>
                        <h3>Kanye West</h3>
                        <h5>$12.49</h5>
                        <button onClick={() => {addToCart(); total+=12.49}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayDrake(playDrake + 1)} onMouseLeave={() => setPlayDrake(playDrake + 1)} alt='' src={drake} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>Take Care</h4>
                        <h3>Drake</h3>
                        <h5>$14.99</h5>
                        <button onClick={() => {addToCart(); total+=14.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayGrenade(playGrenade + 1)} onMouseLeave={() => setPlayGrenade(playGrenade + 1)} alt='' src={bruno} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>Doo-Wops & Holligans</h4>
                        <h3>Bruno Mars</h3>
                        <h5>$13.29</h5>
                        <button onClick={() => {addToCart(); total+=13.29}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayPost(playPost + 1)} onMouseLeave={() => setPlayPost(playPost + 1)} alt='' src={post} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>Stoney</h4>
                        <h3>Post Malone</h3>
                        <h5>$12.99</h5>
                        <button onClick={() => {addToCart(); total+=12.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayBad(playBad + 1)} onMouseLeave={() => setPlayBad(playBad + 1)} alt='' src={mj} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>Bad</h4>
                        <h3>Michael Jackson</h3>
                        <h5>$13.99</h5>
                        <button onClick={() => {addToCart(); total+=13.99}}>Add To Cart</button>
                    </div>
                    <div className='vinyl'>
                        <img onMouseEnter={() => setPlayEminem(playEminem + 1)} onMouseLeave={() => setPlayEminem(playEminem + 1)} alt='' src={eminem} style={{width: '250px'}}></img>
                        <div></div>
                        <h4>The Eminem Show</h4>
                        <h3>Eminem</h3>
                        <h5>$15.29</h5>
                        <button onClick={() => {addToCart(); total+=15.29}}>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div id="footer">
                <h3>VINALLY DOES NOT OWN ANY COPYRIGHTS TO THE MUSIC FEATURED HERE</h3>
                <h3>VINALLY © {curYear}</h3>
            </div>
        </div>
    )
}

export default Shop
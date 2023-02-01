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

import nirvanaSong from './songs/nirvana.mp3'
import astleySong from './songs/astley.mp3'
import eaglesSong from './songs/hotel.mp3'
import weekndSong from './songs/lights.mp3'
import bepSong from './songs/peas.mp3'
import divideSong from './songs/perfect.mp3'
import maroonSong from './songs/night.mp3'
import adeleSong from './songs/deep.mp3'
import nickelbackSong from './songs/rock.mp3'
import kanyeSong from './songs/heart.mp3'
import drakeSong from './songs/drake.mp3'
import brunoSong from './songs/grenade.mp3'
import postSong from './songs/post.mp3'
import mjSong from './songs/bad.mp3'
import eminemSong from './songs/eminem.mp3'

const songData = [
    {
        id: 0,
        artist: 'Nirvana',
        album: 'Smells Like Teen Spirit',
        price: 12.99,
        art: nirvana,
        song: new Audio(nirvanaSong)
    },
    {
        id: 1,
        artist: 'Rick Astley',
        album: 'Never Gonna Give You Up',
        price: 9.99,
        art: astley,
        song: new Audio(astleySong)
    },
    {
        id: 2,
        artist: 'The Eagles',
        album: 'Hotel California',
        price: 14.99,
        art: eagles,
        song: new Audio(eaglesSong)
    },
    {
        id: 3,
        artist: 'The Weeknd',
        album: 'Blinding Lights',
        price: 10.99,
        art: weeknd,
        song: new Audio(weekndSong)
    },
    {
        id: 4,
        artist: 'The Black Eyed Peas',
        album: 'The E.N.D',
        price: 9.49,
        art: bep,
        song: new Audio(bepSong)
    },
    {
        id: 5,
        artist: 'Ed Sheeran',
        album: 'Divide',
        price: 12.99,
        art: divide,
        song: new Audio(divideSong)
    },
    {
        id: 6,
        artist: 'Maroon 5',
        album: 'Overexposed',
        price: 13.49,
        art: maroon,
        song: new Audio(maroonSong)
    }, 
    {
        id: 7,
        artist: 'Adele',
        album: '21',
        price: 16.99,
        art: adele,
        song: new Audio(adeleSong)
    },
    {
        id: 8,
        artist: 'Nickelback',
        album: 'All The Right Reasons',
        price: 11.99,
        art: nickelback,
        song: new Audio(nickelbackSong)
    },
    {
        id: 9,
        artist: 'Kanye West',
        album: '808s & Heartbreak',
        price: 12.49,
        art: kanye,
        song: new Audio(kanyeSong)
    },
    {
        id: 10,
        artist: 'Drake',
        album: 'Take Care',
        price: 14.99,
        art: drake,
        song: new Audio(drakeSong)
    }, 
    {
        id: 11,
        artist: 'Bruno Mars',
        album: 'Doo-Wops & Hooligans',
        price: 13.29,
        art: bruno,
        song: new Audio(brunoSong)
    }, 
    {
        id: 12,
        artist: 'Post Malone',
        album: 'Stoney',
        price: 12.99,
        art: post,
        song: new Audio(postSong)
    },
    {
        id: 13,
        artist: 'Michael Jackson',
        album: 'Bad',
        price: 13.99,
        art: mj,
        song: new Audio(mjSong)
    }, 
    {
        id: 14,
        artist: 'Eminem',
        album: 'The Eminem Show',
        price: 15.29,
        art: eminem,
        song: new Audio(eminemSong)
    }
]

export default songData
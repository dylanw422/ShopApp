import React from 'react'
import './About.css'

function About({cart}) {

    return(
        <div>
            <header>
                <h1 id="name">Vinylly.</h1>
                <a href="/">HOME</a>
                <a href="shop">SHOP</a>
                <a href="about">ABOUT</a>
                <a href="checkout">CHECKOUT <span><div>{cart.length}</div></span></a>
            </header>
            <div id='aboutInfo'>
                <h1>About Us</h1>
                <h3>Welcome to Vinally, where we believe that music should be enjoyed in its purest form. We are dedicated to providing our customers with the highest quality vinyl records and a unique listening experience.
                    Our store uses cutting-edge technology to create a new generation of vinyl records that provide an even clearer and more dynamic sound than ever before. Our records are made using a proprietary process that enhances the sound quality, making your listening experience truly immersive.
                    Whether you're a seasoned collector or just discovering the joy of vinyl records, our knowledgeable staff is always on hand to help you find the perfect album to add to your collection. From classic rock to jazz, hip-hop to classical, we have a wide selection of genres to choose from.
                    We understand the importance of preserving the integrity of the original recording and that's why we only carry records that have been remastered with the highest attention to detail. We believe that music should be enjoyed the way it was intended, and our records are the perfect way to do just that.
                </h3>
            </div>
        </div>
    )
}

export default About
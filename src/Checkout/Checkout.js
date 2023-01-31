import React, { useState, useEffect } from 'react'
import './Checkout.css'

function Checkout() {

    return (
        <div>
            <header>
                <h1 id="name">Vinylly.</h1>
                <a href="shopapp">HOME</a>
                <a href="shop">SHOP</a>
                <a href="about">ABOUT</a>
                <a href="checkout">CHECKOUT <span><div>0</div></span></a>
            </header>
            <div id='title'>
                <h1>Your Cart</h1>
            </div>
            <div id='cartArea'>
                <div id='cart'>
                    <div className='item'></div>
                </div>
            </div>
            <div id='total'>
                <div id='subtotal'>
                    <h3>Subtotal: </h3>
                </div>             
            </div>
            <div id='checkout'>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Checkout
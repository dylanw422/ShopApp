import React, { useState, useEffect } from 'react'
import './Checkout.css'
import songData from '../Shop/songData.js'

function Checkout({cart, clearCart}) {

    function rndNum(num) {
        return Math.round((num + Number.EPSILON) * 100)/ 100;
    }

    let subtotal = 0
    let tax = 0
    let shipping = 10.00
    let total = 0


    return (
        <div>
            <header>
                <h1 id="name">Vinylly.</h1>
                <a href="shopapp">HOME</a>
                <a href="shop">SHOP</a>
                <a href="about">ABOUT</a>
                <a href="checkout">CHECKOUT <span><div>{cart.length}</div></span></a>
            </header>
            <div id="thisArea">
                <div id="checkoutArea">
                    <div id="cartWindow">
                    {cart.map((id) => {
                        subtotal += songData[id].price
                        tax = rndNum(subtotal*0.08)
                        total = rndNum(subtotal + tax + shipping)
                        return (
                            <div className="cartItem">
                                <img alt='' src={songData[id].art}></img>
                                <div className='songInfo'>
                                    <h4>{songData[id].album}</h4>
                                    <h4>{songData[id].artist}</h4>
                                </div>
                                <h3>${songData[id].price}</h3>
                            </div>
                        )
                    })}
                    </div>
                    <div id="payment">
                        <h3 id="subtotal">Subtotal: ${rndNum(subtotal)}</h3>
                        <h3 id="taxes">Tax: ${tax}</h3>
                        <h3 id="shipping">Shipping: ${shipping}</h3>
                        <h1 id="total">Total: ${total}</h1>
                        <div id="checkoutBtn">
                            <button onClick={clearCart}>Checkout</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
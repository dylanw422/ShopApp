import React from 'react'
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
                                    <h5>{songData[id].album}</h5>
                                    <h3>{songData[id].artist}</h3>
                                </div>
                                <h3 className='price'>${songData[id].price}</h3>
                            </div>
                        )
                    })}
                    </div>
                    <div id="payment">
                        <h3 id="subtotal">Subtotal: {rndNum(subtotal)} USD</h3>
                        <h3 id="taxes">Tax: {tax} USD</h3>
                        <h3 id="shipping">Shipping: {shipping} USD</h3>
                        <h1 id="total">Total: {total} USD</h1>
                        <div id="checkoutBtnDiv">
                            <button id="checkoutBtn" onClick={clearCart}>Checkout</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
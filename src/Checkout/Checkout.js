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
            <div id="thisArea">
                <div id="checkoutArea">
                    <div id="cartWindow">

                    </div>
                    <div id="payment">
                        <h3 id="subtotal">Subtotal</h3>
                        <h3 id="taxes">Tax</h3>
                        <h3 id="shipping">Shipping</h3>
                        <h1 id="total">Total</h1>
                        <div id="checkoutBtn">
                            <button>Checkout</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
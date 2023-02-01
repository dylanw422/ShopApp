import React, { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Shop from "./Shop/Shop.js";
import Checkout from "./Checkout/Checkout.js"
import About from './About/About.js'

function RouteSwitch() {
    const [cart, setCart] = useState(() => {
        const initialCart = localStorage.getItem('cart')

        if (initialCart) {
            return JSON.parse(initialCart)
        }

        return []
    })

 
    function clearCart() {
        setCart([])
        localStorage.clear('cart')
    }

    return(
        <HashRouter basename="/shopapp">
            <Routes>
                <Route path="/shopapp" element={<Home cart={cart} />} />
                <Route path="/shop" element={<Shop cart={cart} />} />
                <Route path="/about" element={<About cart={cart}/>} />
                <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;
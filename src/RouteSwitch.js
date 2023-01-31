import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Shop from "./Shop/Shop.js";
import Checkout from "./Checkout/Checkout.js"

function RouteSwitch() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/shopapp" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;
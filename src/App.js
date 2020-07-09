import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './API/GlobalState';
import { Navigation, Products, ProductList, ProductDetail, Cart, Home, NotFound } from './Components';
  
export const App = () => {
    return (
        <GlobalProvider>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />}>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/:productID" element={<ProductDetail />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </GlobalProvider>
    )
}

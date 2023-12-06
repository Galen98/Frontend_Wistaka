// import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import React, { useState, useEffect } from 'react';
// import ProductList from './Components/ProductList';
// import ShoppingCart from './Components/ShoppingCart';


function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);

//     if (existingProduct) {
//         // If the product is already in the cart, update its quantity
//         const updatedCart = cart.map(item =>
//             item.id === existingProduct.id
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//         );
//         setCart(updatedCart);
//     } else {
//         // If the product is not in the cart, add it with quantity 1
//         setCart([...cart, { ...product, quantity: 1 }]);
//     }
// };

//     const removeFromCart = (productId) => {
//         setCart(cart.filter(item => item.id !== productId));
//     };
  return (
    <>
    <HomePage/>
    </>
  );
}

export default App;

import React, { useEffect, useReducer } from 'react'
import "./App.css"
import Cart from './components/Cart'
import Product from './components/Product'
import { cartReducer } from './reducer/cartReducer'

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [], cart: []
  })

  const fetchProducts = async () => {
    let res = await fetch('http://dummyjson.com/products')
    let { products } = await res.json()
    dispatch({ type: 'ADD_PRODUCTS', payload: products })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='app-container'>
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  )
}

export default App

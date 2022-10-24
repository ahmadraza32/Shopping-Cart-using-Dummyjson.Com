import React from 'react'
import '../App.css'

function Product({state, dispatch}) {
  const {products, cart} = state

  return (
    <div  className="product-wrapper">
      {
        products.map((product) => {
          let { id, thumbnail, price, title } = product
          
          return <div key={id} className='product-single'>
            <img src={thumbnail} alt="" />
            <div className="price-container">
              <h3> {title} </h3>
              <h3> {price} </h3>
            </div>
            <div className="btn-container">
              {
                cart.some(c => c.id === id) ? <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: {id} })} className="btn danger">Remove</button> : <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: {id, thumbnail, price, qty: 1,title} })} className="btn green">Add to Cart</button> 
              }
              
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Product

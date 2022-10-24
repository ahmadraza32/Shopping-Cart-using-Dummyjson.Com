import React, { useEffect, useState } from 'react'
import '../App.css'

function Cart({state, dispatch}) {
  const {products, cart} = state
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0))
  }, [cart])

  console.log(cart);
  return (
    <div className='cart-wrapper'>
      <h1> Cart total $ {total} </h1>
      {
        cart.length === 0 ? 'Cart is empty' : (
          cart.map(singleCart => {
            let {id, thumbnail, price, title, qty} = singleCart
            return <div className="cart-single" key={id}>

              <img src={thumbnail} alt="" />
              <div className="cart-single-title">
                <h4> {title} </h4>
                <h4> {price} </h4>
              </div>
              <div className="cart-qty">
                <button className='btn' onClick={() => dispatch({ type: 'CHANGE_QTY', payload: { id, qty: qty + 1} })}>+</button>
                <div> {qty} </div>
                <button className='btn' onClick={() => dispatch({ type: 'CHANGE_QTY', payload: { id, qty: qty - 1} })}>-</button>
              </div>

            </div>
          })
        )
      }
    </div>
  )
}

export default Cart

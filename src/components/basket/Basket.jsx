import './basket.css'

import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

export const Basket = () => {
  const {
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    totalCartPrice,
    checkStock,
  } = useContext(ProductContext)

  return (
    <aside className="block col-1">
      <h3>Cart Items</h3>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems?.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2 space">
            <button
              disabled={checkStock(item.name) === false}
              className="add_btn"
              onClick={() => increaseCartQuantity(item)}
            >
              +
            </button>
            <button
              className="remove_btn"
              onClick={() => decreaseCartQuantity(item)}
            >
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x £{item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">£{totalCartPrice.toFixed(2)}</div>
          </div>
        </>
      )}
    </aside>
  )
}

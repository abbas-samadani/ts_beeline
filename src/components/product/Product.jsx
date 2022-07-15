import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import './product.css'
export const Product = ({ product }) => {

  // get some methods using useContext
  const { increaseCartQuantity, checkStock } = useContext(ProductContext)
  return (
    <div className="product_card">
      <img className="product_card_image" src={product.image} alt="" />
      <h5>{product.name}</h5>
      <p>{product.price}</p>
      <p>
        {checkStock(product.name) === false ? (
          <div style={{ color: 'red' }}>out of stock</div>
        ) : (
          <div>In Stock</div>
        )}
      </p>
      <button
        disabled={checkStock(product.name) === false}
        className="button"
        onClick={() => increaseCartQuantity(product)}
      >
        Add to basket
      </button>
    </div>
  )
}

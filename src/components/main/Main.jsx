import './main.css'
import React, { useContext } from 'react'
import { Product } from '../product/Product'
import { ProductContext } from '../../context/ProductContext'

export const Main = () => {
  const { products } = useContext(ProductContext)

  return (
    <div className="block col-2">
      <div className="products_list">
        <div className="product_list_items" data-testid="product_list">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

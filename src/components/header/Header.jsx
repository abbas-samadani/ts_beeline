import './header.css'

import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

export const Header = () => {
  const { totalQuantity } = useContext(ProductContext)
  return (
    <header className="row block center">
      <div>
        <h2>Shopping Card</h2>
      </div>
      <div>
        <a href="/#">Cart</a>
        <span className="qty_number" data-testid="qty">
          {totalQuantity}
        </span>
      </div>
    </header>
  )
}

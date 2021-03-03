import React from 'react'

export function Product({product}) {
  return (
    <div className="product">
      <h4 className="product__title">{product.title}</h4>
      <p className="product__description">{product.description}</p>
    </div>
  )
};

import React from 'react'
import { Product } from './product'

export const App = () => {
  
  const products = [
    {
      title: 'Code',
      description: 'SuccessFul'
    },
    {
      title: 'Life',
      description: 'Great Thrive'
    }
  ]

  return (
    <div>
      <h1>Hello Again Bro</h1>
      {products.map((product, i) => (
        <Product key={i} product={product}/>
      ))}
    </div>
  )
};

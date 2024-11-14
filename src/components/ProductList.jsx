import React from 'react'
import Product from './Prduct'

const ProductList = ({chairs}) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        chairs.map((chair) => (
          <Product key={chair.id} chair={chair} />
        ))
      }
    </div>
  )
}

export default ProductList
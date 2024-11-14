import React from 'react'
import { Link } from 'react-router-dom';


// description id name image price
// 기뷴은 image name price만!
const Product = ({chair}) => {
  return (
    <Link to={`/products/${chair.id}`} className='flex flex-col items-center p-2 text-center border rounded-lg shadow-lg'>
      <img className='w-40 mb-2 border-b h-50' src={chair.image} alt="chair-img" />
      <h2 className='text-xl font-bold'>{chair.name}</h2>
      <p className='text-gray-500'>{chair.price}원</p>
    </Link>
  )
}

export default Product
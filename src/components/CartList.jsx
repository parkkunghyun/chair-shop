import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart';


const CartList = () => {
  const items = useSelector(state => state.carts.items);

  if (items.length == 0) {
    return (
      <div className='flex flex-col items-center'>
        <h1 className='my-24 text-4xl font-extrabold '>
          장바구니가 비어있습니다.
          </h1>
    </div>
    )
  }
  return (
    <div className='w-[800px] mb-16'>
      {
        items.map(item => (
          <Cart key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default CartList
import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart';


const CartList = () => {
  const items = useSelector(state => state.carts.items);

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
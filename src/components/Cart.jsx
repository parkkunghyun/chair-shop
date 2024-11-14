import React from 'react'
import { addItem, deleteItem, minusItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

import { RiDeleteBack2Line } from "react-icons/ri";

const Cart = ({ item }) => {
  const dispatch = useDispatch();
  
  return (
    <div className='p-4 m-4 border-t border-black'>
      {/* 제목 */}
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-md'>{item.name}</h2>
        <div className='flex items-center gap-4'>
          <p className='mr-20 font-bold text-md'>수량</p>
          <p className='mr-16 font-bold text-md'>가격</p>
        </div>
      </div>

      {/* 상품 이미지, 수량, 가격 */}
      <div className='flex items-center justify-between mt-2'>
        <div className='flex-1'>
          <img src={item.image} alt="" className='w-20 h-20' />
        </div>

        {/* 수량 조절 */}
        <div className='flex items-center gap-2 mr-14'>
          <button onClick={() => dispatch(minusItem(item))} className='text-2xl font-bold'>-</button>
          <p className='font-bold text-md'>{item.quantity}</p>
          <button onClick={() => dispatch(addItem(item))} className='text-xl font-bold'>+</button>
        </div>

        {/* 가격 */}
        <p className='mr-6 font-bold text-md'>{item.price}원</p>

        <RiDeleteBack2Line
          onClick={() => dispatch(deleteItem(item))}
          className='text-xl cursor-pointer hover:scale-105' />
      </div>
    </div>
  )
}

export default Cart;
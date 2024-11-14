import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartList from '../components/CartList';

const CartPage = () => {
  const totalPrice = useSelector(state => state.carts.totalPrice);
  const totalQuantity = useSelector(state => state.carts.totalQuantity);

  return (
    <div className='flex flex-col items-center'>
        <h1 class="bg-gradient-to-r mb-4 text-3xl font-extrabold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            장바구니
      </h1>

      <CartList/>

      <div className='w-[400px] sm:w-[800px]'>
          <h1 className='p-2 mb-2 text-3xl font-extrabold border-b-2'>주문 예정 금액</h1>
          <div className='flex justify-between p-4 m-4'>
            <div className=''>
              <h3 className='text-sm font-bold'>주문 예정 금액</h3>
              <p className='text-2xl font-bold'>{totalPrice}</p>
            </div>

            <div>
              <h3 className='text-sm font-bold'>주문 수량</h3>
              <p className='text-2xl font-bold'>{totalQuantity}</p>
            </div>
        </div>
        
        <div className='flex flex-col items-center w-full text-center sm:flex-row sm:justify-between '>
          <Link to="/" className='w-1/2 p-4 m-4 text-xl font-bold border-2 border-black rounded-lg'>쇼핑 계속하기</Link>
          <Link to="#" className='w-1/2 p-4 m-4 text-xl font-bold text-white bg-black rounded-lg'>구매하기</Link>
        </div>
      </div>

      </div>
  )
}

export default CartPage
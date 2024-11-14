import React from 'react'
import logoss from "../image/logoss.png"
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
      <nav className='flex justify-between p-2 mb-10 border-b shadow-lg'>
          <Link to="/">
            <img className='w-20 cursor-pointer' src={logoss} alt="logoss" />
          </Link>
          <div className='flex items-center gap-2'>
              <Link to="/login" className='mr-2 text-medium hover:scale-105'>로그인</Link>
              <Link to="/signup" className='mr-2 text-medium hover:scale-105'>회원가입</Link>
              <Link to="/cart" className='flex items-center mr-2 text-medium hover:scale-105'>장바구니 <FaCartShopping/></Link>
          </div>

    </nav>
  )
}

export default Navbar
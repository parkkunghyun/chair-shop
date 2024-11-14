import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import { Link } from 'react-router-dom';


import { useDispatch } from 'react-redux';
import { addItem } from "../features/cart/cartSlice";

const DetailPage = () => {
  const [chair, setChair] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchDataId = async () => {
    try {
      const chairDocRef = doc(db, 'chairs', id);
      const chairDoc = await getDoc(chairDocRef);
      setChair(chairDoc.data());
     //console.log("Document data:", chairDoc.data());
    } catch (e) {
      console.error(e);
    }
    finally {
      setIsLoading(false);
    }

  }

  useEffect(() => {
    fetchDataId()
  }, [id]);

  if (isLoading) {
    return (
      <div className='flex flex-col items-center'>
        <h1 class="bg-gradient-to-r mb-4 text-3xl font-extrabold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            로딩 중입니다...
        </h1>
      </div>
    )
  }

  if (!chair) {
    return (
      <div className='flex flex-col items-center'>
        <h1 class="bg-gradient-to-r mb-4 text-3xl font-extrabold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            의자를 찾을 수 없습니다.
        </h1>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 class="bg-gradient-to-r mb-4 text-3xl font-extrabold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          {chair.name}
      </h1>
      <div className='flex items-center gap-2 p-2 shadow-lg rounded-xl'>
        <img src={chair.image} className='w-80 h-80' alt="chair" />
        <div className='flex flex-col w-[250px] gap-4'>
          <h2 className='flex-1 text-sm'>{chair.description}</h2>
          <div className='flex flex-col gap-4'>
            <h2 className=''>가격: <span className='text-xl font-bold'>{chair.price}</span></h2>
            <Link
              to="/cart"
              onClick={() => dispatch(addItem({id, ...chair }))}
              className='w-[200px] p-2 mt-4 text-xl font-bold bg-green-300 rounded-md shadow-lg hover:scale-105'>
              장바구니에 추가하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
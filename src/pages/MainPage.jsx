import React, { useEffect, useMemo, useState } from 'react'
import { getDocs, collection, query } from 'firebase/firestore';
import { db } from "../firebaseConfig";
import ProductList from '../components/ProductList';

const MainPage = () => {
    const [chairs, setChairs] = useState([]);
    const fetchData = async () => {
        try {
            const dataSnapShot = await getDocs(collection(db, 'chairs'));
            const data = dataSnapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setChairs(data);
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const memozationChairs = useMemo(() => chairs, [chairs]);

  return (
      <div className='flex flex-col items-center'>
          <h1 class="bg-gradient-to-r mb-8 text-5xl font-extrabold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Chair List
          </h1>
          <ProductList chairs={memozationChairs} />
    </div>
  )
}

export default MainPage
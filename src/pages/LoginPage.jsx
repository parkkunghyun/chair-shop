import React, { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      
    } catch (e) {
      console.error(e);
    }
  }
  
  return (
    <div className='flex flex-col items-center'>
          <h1 class="my-8 text-5xl font-extrabold ">
              로그인
      </h1>
      <div>
        <form action="">
          <input type="email" />
          <input type="password" />
        </form>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default LoginPage
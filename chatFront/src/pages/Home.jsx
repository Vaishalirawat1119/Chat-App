import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'
import { useState } from 'react'
import Model from '../components/Model'

const Home = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true);

  const openSignUp = () => {
    setIsModelOpen(true);
    setIsLogin(false);
  }

  const openLogin = () => {
    setIsModelOpen(true);
    setIsLogin(true);
  }

  return (
    <div className='flex items-center justify-center h-screen bg-grey-100'>
        <div 
            className='bg-cover w-2/4 h-[calc(100vh-60px)] rounded-lg flex items-center justify-center'
            style={{backgroundImage: "url('/home-bg.jpg')"}}
        >
            <div className='text-center'>
                <h2 className='text-3xl bg-white py-1 font-bold text-grey-700 rounded-2xl'>
                  Welcome
                </h2>
                <button className='p-3 hover:bg-black bg-opacity-50 bg-black rounded-2xl mt-3  text-white text-2xl font-bold' onClick={() => setIsModelOpen(true)}>
                  Login / Register
                </button>
            </div>
        </div>
        <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
          {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
        </Model>
    </div>
  )
}

export default Home
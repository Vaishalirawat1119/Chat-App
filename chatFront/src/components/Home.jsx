import React from 'react'

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-grey-100'>
        <div 
            className='bg-cover w-2/4 h-[calc(100vh-60px)] rounded-lg flex items-center justify-center'
            style={{backgroundImage: "url('/home-bg.jpg')"}}
        >
            <div className='text-center'>
                <h2 className='text-3xl bg-white py-1 font-bold text-grey-700 rounded-2xl'>Welcome</h2>
                <button className='p-3 hover:bg-black bg-opacity-50 bg-black rounded-2xl mt-3  text-white text-2xl font-bold'>Login / Register</button>
            </div>
        </div>
    </div>
  )
}

export default Home
import React, { useState } from 'react'

const Login = ({openSignUp}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 '>Username:</label>
          <input type="text" className='px-3 py-2 border w-full' onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username'/>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Password:</label>
          <input type="password" className='w-full px-3 py-2 border' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
        </div>
        <div className='mb-4 flex items-center justify-between'>
          <label className='inline-flex items-center'>
            <input type="checkbox" className='form-checkbox'/>
            <span className='ml-2 text-gray-700'>Remember Me</span>
          </label>
          <a href="#" className='text-blue-600'>Forgot Password?</a>
        </div>
        <div className='mb-4'>
          <button type='submit' className='w-full bg-blue-600 text-white py-2'>Login</button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Don't Have an Account?</span>
        <button className='text-blue-600' onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
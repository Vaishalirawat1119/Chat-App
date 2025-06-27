import React, { useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Login</h2>
      <form onClick={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-grey-700 '>Username:</label>
          <input type="text" className='px-3 py-2 border w-full' onChange={(e) => setUsername(e.target.value)} placeholder='Enter Username'/>
        </div>
        <div className='mb-4'>
          <label className='block text-grey-700'>Password:</label>
          <input type="password" className='w-full px-3 py-2 border' onChange={(e) => setPassword(e.target.value)} placeholder='*********'/>
        </div>
        <div className='mb-4 flex items-center justify-between'>
          <label className='inline-flex items-center'>
            <input type="checkbox" className='form-checkbox'/>
            <span className='ml-2 text-grey-700'>Remember Me</span>
          </label>
          <a href="#" className='text-red-800'>Forgot Password?</a>
        </div>
        <div className='mb-4'>
          <button type='submit' className='w-full bg-red-600 text-white py-2'>Login</button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-grey-700'>Don't Have an Account?</span>
        <button className='text-red-800'>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
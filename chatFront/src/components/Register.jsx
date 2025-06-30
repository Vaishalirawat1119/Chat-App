import React, { useState } from 'react'
import axios from 'axios'

const Register = ({openLogin}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2000/chat/user/register', {name, email, password})
  }

  return (
   <div>
      <h2 className='text-2xl font-bold mb-2'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 '>Name:</label>
          <input type="text" className='px-3 py-2 border w-full' onChange={(e) => setName(e.target.value)} placeholder='Enter Name'/>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email:</label>
          <input type="email" className='w-full px-3 py-2 border' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Password:</label>
          <input type="password" className='w-full px-3 py-2 border' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Upload Image</label>
          <input 
            type='file' 
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className='border p-2 block w-full text-sm text-gray-500 
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0 file:text-sm 
                      file:font-semibold file:bg-blue-500 
                      file:text-white hover:file:bg-blue-700' 
          />
        </div>
        <div className='mb-4'>
          <button type='submit' className='w-full bg-blue-600 text-white py-2'>Sign Up</button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Already Have an Account?</span>
        <button className='text-blue-600' onClick={openLogin}>Login</button>
      </div>
    </div> 
  )
}

export default Register
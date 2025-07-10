import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ openSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:2000/chat/user/login',
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("Login Response:", response.data);

      if (response.data.msg === 'Login successful') {
        window.localStorage.setItem('chat-token', response.data.token)
        window.localStorage.setItem('userId', response.data.user._id)
        navigate('/chat');
      } else {
        alert(response.data.msg || "Login failed");
      }

    } catch (err) {
      console.error("Login Error:", err);
      alert(err.response?.data?.msg || "Something went wrong!");
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Username:</label>
          <input
            type="text"
            name="username"
            className='px-3 py-2 border w-full'
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Username'
            value={username}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Password:</label>
          <input
            type="password"
            name="password"
            className='w-full px-3 py-2 border'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            value={password}
          />
        </div>
        <div className='mb-4 flex items-center justify-between'>
          <label className='inline-flex items-center'>
            <input type="checkbox" className='form-checkbox' />
            <span className='ml-2 text-gray-700'>Remember Me</span>
          </label>
          <a href="#" className='text-blue-600'>Forgot Password?</a>
        </div>
        <div className='mb-4'>
          <button type='submit' className='w-full bg-blue-600 text-white py-2'>
            Login
          </button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Don't Have an Account? </span>
        <button className='text-blue-600' onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
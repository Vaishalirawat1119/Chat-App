import React from 'react'

const Model = ({isModelOpen, setIsModelOpen, children}) => {
  if(!isModelOpen) return null;
  return (
    <div className='fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex items-center justify-center'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
            <button className='absolute top-4 right-4 text-grey-300 text-3xl' onClick={() => setIsModelOpen(false)}>                &times;
            </button>
            {children}
        </div>
    </div>
  )
}

export default Model
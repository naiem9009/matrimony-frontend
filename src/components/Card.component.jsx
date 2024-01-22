

import React from 'react'

const Card = ({Icon, count, content, className}) => {
  return (
    <div className={`p-5 flex items-center flex-row gap-4 rounded-md border-l-4 ${className}`}>
        <Icon size={'40px'} color="red" />

        <div className=''>
            <h1 className='text-4xl text-red-400 font-semibold'>{count}</h1>
            <p className='text-gray-500 text-sm'>{content}</p>
        </div>
    </div>
  )
}

export default Card
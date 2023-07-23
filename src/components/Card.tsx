import React from 'react'


const Card = ({children}) => {
  return (
      <div className='bg-gray-200 rounded-md overflow-hidden w-full h-full'>{ children}</div>
  )
}

export default Card

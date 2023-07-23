import React from 'react'

const Container = ({children}) => {
  return (
      <div className='max-w-[2520px] mx-auto xl:mx-20'>
          {children}
      </div>
  )
}

export default Container
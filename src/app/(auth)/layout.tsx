import React from 'react'

interface Props {
  children:React.ReactNode;
}

const layout = ({children}:Props) => {
  return (
    <div className='bg-gradient-to-tr from-blue-900 to-blue-950 text-white w-full h-full flex flex-col justify-center items-center'>
      {children}
    </div>
  )
}

export default layout

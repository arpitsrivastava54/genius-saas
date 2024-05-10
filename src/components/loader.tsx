import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-col py-5 animate-pulse justify-center items-center bg-muted-foreground/10'>
      <Image src={"/logo.webp"} width={30} height={30} className="animate-spin object-contain" alt="no data" />
      <p className='text-muted-foreground'>Genius is Thinking...</p>
    </div>
  )
}

export default Loader

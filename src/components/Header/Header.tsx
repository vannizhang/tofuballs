import React from 'react'

const Header = () => {
  return (
    <div className='flex mb-8 justify-between'>
        <div>
            <h4 className='font-bold text-4xl text-gray-800'>Jinnan Zhang</h4>
            <h5 className='mt-2'>Senior Web Developer at <a className=' underline' href="//esri.com" target='_blank'>Esri</a></h5>
        </div>
        

        <div>
            <span className='mr-2'>about</span>
            <span>works</span>
        </div>
    </div>
  )
}

export default Header
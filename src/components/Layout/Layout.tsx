import React, { FC } from 'react'

import { 
  Routes, Route
} from 'react-router'

import {
  About,
  Works,
  Header,
  Footer
} from '..'

const Layout = () => {
  return (
    <div
        className='container mx-auto max-w-2xl mt-24'
    >
        <Header />
        
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/works' element={<Works />}/>
        </Routes>
        
        <Footer />
    </div>
  )
}

export default Layout
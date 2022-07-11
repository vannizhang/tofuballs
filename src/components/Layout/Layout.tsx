import React, { FC } from 'react'

// import { 
//   Routes, Route
// } from 'react-router'

import {
  About,
  Works,
  Header,
  Footer
} from '..'

const Layout = () => {
  return (
    <div
        className='container mx-auto max-w-3xl px-3 md:px-0 mt-24'
    >
        <Header />

        <About />
        <Works />
        {/* <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/works' element={<Works />}/>
        </Routes> */}
        
        <Footer />
    </div>
  )
}

export default Layout
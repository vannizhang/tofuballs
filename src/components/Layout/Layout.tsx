import React, { FC } from 'react'

// import { 
//   Routes, Route
// } from 'react-router'

import {
  About,
  Works,
  Header,
  Footer,
  DarkModeToggle
} from '..'

const Layout = () => {
  return (
    <div
        className='container mx-auto max-w-3xl px-3 md:px-0'
    >
        <div className='mt-6 text-right'>
          <DarkModeToggle />
        </div>

        <div className='mt-20'>
          <Header />
          <About />
          <Works />
          <Footer />
        </div>

    </div>
  )
}

export default Layout
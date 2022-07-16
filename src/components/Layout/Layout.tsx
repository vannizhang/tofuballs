import React, { FC } from 'react'

// import { 
//   Routes, Route
// } from 'react-router'

import {
  About,
  Works,
  Header,
  Footer,
  // DarkModeToggle
} from '..'

const Layout = () => {
  return (
    <div
        className='container mx-auto max-w-3xl px-3 md:px-0'
    >
          <Header />
          <About />
          <Works />
          <Footer />
    </div>
  )
}

export default Layout
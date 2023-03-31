import React, { FC } from 'react'

// import { 
//   Routes, Route
// } from 'react-router'

import {
  About,
  Works,
  Header,
  Footer,
  DarkModeToggle,
  // DarkModeToggle
} from '..'

type Props = {
  children?:React.ReactNode;
}

const Layout:FC<Props> = ({
  children
}) => {
  return (
    <div
        className='container mx-auto max-w-3xl px-3 md:px-0'
    >
        <div className='mt-6 text-right'>
          <DarkModeToggle />
        </div>
          { children }
          <Footer />
    </div>
  )
}

export default Layout
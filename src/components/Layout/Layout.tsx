import React, { FC } from 'react'

// import { 
//   Routes, Route
// } from 'react-router'

import {
  About,
  Works,
  Header,
  Footer,
  SiteNav,
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
        <SiteNav />

        <div>
          { children }
        </div>
          
        <Footer />
    </div>
  )
}

export default Layout
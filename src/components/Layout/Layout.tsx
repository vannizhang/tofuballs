import React, { FC } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout:FC = ({
    children
}) => {
  return (
    <div
        className='container mx-auto max-w-2xl mt-24'
    >
        <Header />
        { children }
        <Footer />
    </div>
  )
}

export default Layout
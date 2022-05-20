import React from 'react'
import { NavLink } from "react-router-dom";

const LINKS = [
  {
    path: '/',
    label: 'about'
  },
  {
    path: 'works',
    label: 'works'
  }
]

const Header = () => {

  const getNavLinks = ()=>{
    return LINKS.map((d)=>{

      const { path, label } = d;

      return (
        <NavLink
          to={path}
          className={'mx-1'}
        >
          { label}
        </NavLink>
      )
    })
  }

  return (
    <div className='flex mb-8 justify-between'>
        <div>
            <h4 className='font-bold text-4xl text-gray-800'>Jinnan Zhang</h4>
            <h5 className='mt-2'>Senior Web Developer at <a className=' underline' href="//esri.com" target='_blank'>Esri</a></h5>
        </div>
        
        <div>
            { getNavLinks() }
        </div>
    </div>
  )
}

export default Header
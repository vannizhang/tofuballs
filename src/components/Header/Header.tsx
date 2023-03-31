import React from 'react'
// import { NavLink } from "react-router-dom";
import {DarkModeToggle} from '../';

// const LINKS = [
//   {
//     path: '/',
//     label: 'about'
//   },
//   {
//     path: 'works',
//     label: 'works'
//   }
// ]

const Header = () => {

  // const getNavLinks = ()=>{
  //   return LINKS.map((d)=>{

  //     const { path, label } = d;

  //     return (
  //       <NavLink
  //         key={label}
  //         to={path}
  //         className={'mx-1'}
  //       >
  //         { label}
  //       </NavLink>
  //     )
  //   })
  // }

  return (
    <>
      <div className='flex mb-8 justify-between mt-16'>
          <div>
              <h4 className='font-bold text-2xl md:text-4xl dark:text-white'>Jinnan Zhang</h4>
              <div className='mt-2'>
                <span className='text-sm md:text-base'>Senior Web Developer at <a className=' underline' href="//esri.com" target='_blank'>Esri</a></span>
              </div>
          </div>
          
          {/* <div>
              { getNavLinks() }
          </div> */}
      </div>
    </>
  )
}

export default Header
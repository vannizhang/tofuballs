import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const SiteNav = () => {

    const [darkModeOn, setDarkModeOn] = useState(false)

    useEffect(()=>{
        const root = document.getElementsByTagName('html')[0];

        if(darkModeOn){
            root.classList.add('dark')
        } else {
            root.classList.remove('dark');
        }
    }, [darkModeOn])

    return (
        <div className='my-12 text-right flex items-center justify-end'>
            <div className='mr-8'>
                <Link className='mr-4' to='/'>Home</Link>
                <Link to='/blogs'>Blogs</Link>
            </div>

            <div>
                <span 
                    className='cursor-pointer' 
                    onClick={setDarkModeOn.bind(null, !darkModeOn)}
                    title={`turn ${darkModeOn ? 'off' : 'on'} dark mode`}
                >
                    { darkModeOn ? String.fromCodePoint(127774) : String.fromCodePoint(127769) }
                </span>
            </div>
        </div>
    )
}

export default SiteNav
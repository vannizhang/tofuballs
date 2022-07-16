import React, { useEffect, useState } from 'react'

const DarkModeToggle = () => {

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
        <span 
            className='cursor-pointer' 
            onClick={setDarkModeOn.bind(null, !darkModeOn)}
            title={`turn ${darkModeOn ? 'off' : 'on'} dark mode`}
        >
            { darkModeOn ? String.fromCodePoint(127774) : String.fromCodePoint(127769) }
        </span>
    )
}

export default DarkModeToggle
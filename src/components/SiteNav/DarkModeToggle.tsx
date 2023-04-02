import React, { useEffect, useState } from 'react'

const STORAGE_KEY_DARK_MODE_PREFERENCE = `USE_DARK_MODE`;
const STORAGE_VALUE_DARK_MODE_PREFERENCE = `true`;

const DarkModeToggle = () => {
    const [darkModeOn, setDarkModeOn] = useState(
        localStorage.getItem(STORAGE_KEY_DARK_MODE_PREFERENCE) === STORAGE_VALUE_DARK_MODE_PREFERENCE
    )

    useEffect(()=>{
        const root = document.getElementsByTagName('html')[0];

        if(darkModeOn){
            root.classList.add('dark');
            localStorage.setItem(
                STORAGE_KEY_DARK_MODE_PREFERENCE, 
                STORAGE_VALUE_DARK_MODE_PREFERENCE
            )
        } else {
            root.classList.remove('dark');
            localStorage.removeItem(STORAGE_KEY_DARK_MODE_PREFERENCE)
        }
    }, [darkModeOn])

    return (
        <div>
            <span 
                className='cursor-pointer' 
                onClick={setDarkModeOn.bind(null, !darkModeOn)}
                title={`turn ${darkModeOn ? 'off' : 'on'} dark mode`}
            >
                { darkModeOn ? String.fromCodePoint(127774) : String.fromCodePoint(127769) }
            </span>
        </div>
    )
}

export default DarkModeToggle
import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const SiteNav = () => {
    return (
        <div className="my-12 text-right flex items-center justify-end">
            <div className="mr-8">
                <Link className="mr-4" to="/">
                    Home
                </Link>
                <Link to="/blog">Blog</Link>
            </div>

            <DarkModeToggle />
        </div>
    );
};

export default SiteNav;

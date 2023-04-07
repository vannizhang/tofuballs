import React from 'react';

import {
    About,
    Works,
    Header,
    Layout,
    // DarkModeToggle
} from '../components';

const Home = () => {
    return (
        <Layout>
            <Header />
            <About />
            <Works />
        </Layout>
    );
};

export default Home;

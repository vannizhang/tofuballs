import React from 'react';
import { Layout } from '../components';

const NotFound = () => {
    return (
        <Layout>
            <div className="mt-32 text-center">
                <p>Oops, looks like you took a wrong turn somewhere!</p>

                <p className="mt-8">
                    In the meantime, why not enjoy this fun fact: the HTTP 404
                    error code was named after a room number at CERN where the
                    World Wide Web was first developed. So, while you may not
                    have found what you were looking for here, you&#39;`re still
                    part of internet history!
                </p>
            </div>
        </Layout>
    );
};

export default NotFound;

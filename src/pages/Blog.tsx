import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import { useNavigate, useLocation, useResolvedPath  } from "react-router-dom";

const Blog = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [notFound, setNotFound] = useState(true);

    useEffect(()=>{
        if (notFound) {
            navigate("/404");
        }
    }, [notFound])

    useEffect(()=>{
        console.log(location)
    }, [location])

    return (
        <Layout>
            <p>This is a blog</p>
        </Layout>
    )
}

export default Blog
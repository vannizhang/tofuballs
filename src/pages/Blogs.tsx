import React from 'react'
import { Layout } from '../components'
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <Layout>
        <p>List of blogs</p>
        
        <ul>
            <li > <Link to='/blog/foo'>foo</Link></li>
            <li > <Link to='/blog/bar'>bar</Link></li>
        </ul>
    </Layout>
  )
}

export default Blogs
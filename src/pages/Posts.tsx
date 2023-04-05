import '../styles/Blog.css'
import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import { Link } from "react-router-dom";
import { format } from 'date-fns'

type BlogPost = {
    /**
     * name of the markdown file (saved in `/public/blog/`) for this blog post (e.g. `hello-world.md`)
     */
    fileName: string;
    /**
     * last modified time in unix timestamp
     */
    lastModified: number;
}

/**
 * Get formated Blog Post Name. 
 * 
 * It should remove the `-` from the file name and capitalize the first letter of each word.
 * 
 * @param fileName 
 * @return formatted name for the blog post
 * 
 * @example
 * ```
 * formatBlogPostName(`hello-world`) // return 'Hello World'
 * ```
 */
const formatBlogPostName = (fileName:string):string=>{
    const [ name ] = fileName.split('.');
    const words = name.split('-')

    const output:string[] = []

    for(const w of words){
        const formattedWord = w[0].toUpperCase() + w.slice(1).toLowerCase()
        output.push(formattedWord) 
    }

    return output.join(' ')
}

const BlogPosts = () => {

    const [posts, setPosts] = useState<BlogPost[]>()

    useEffect(()=>{
        (async()=>{
            const res = await fetch('/public/blog/data.json')
            const data = await res.json()
            setPosts(data);
        })()
    }, [])

    return (
        <Layout>
            <div className='lg:flex justify-between mb-8'>
                <h3 className='text-3xl font-bold mb-4'>Blog Posts</h3>

                <p className='lg:w-2/3 text-sm'>
                    Here is Jinnan's technical blog, where I will occasionally share some content related to front-end development, web mapping, and GIS. Some of the content may be notes I've taken while solving technical problems, while others may be my random thoughts. Most of the content may not have much practical value, and some of it may seem stupid to you. Therefore, please think twice before clicking on the links below:
                </p>
            </div>

            { posts 
                ? (
                    posts.map(data=>{
                        const { fileName, lastModified } = data;

                        console.log(lastModified)
                        const [ name ] = fileName.split('.');
                        return (
                            <div className='mb-4'
                                key={fileName}
                            > 
                                <Link className='text-lg' to={`/blog/${name}`}>{formatBlogPostName(name)}</Link>
                                <br />
                                <span className='text-sm opacity-60'>{format(lastModified, 'MMM-dd, yyyy')}</span>
                            </div>
                        )
                    })
                )
                : (
                    <p>Loading...</p>
                )
            }
        </Layout>
    )
}

export default BlogPosts
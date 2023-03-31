import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import { Link } from "react-router-dom";
import { format} from 'date-fns'

type BlogPost = {
    /**
     * name of the markdown file (saved in `/public/blogs/`) for this blog post (e.g. `hello-world.md`)
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

const Blogs = () => {

    const [blogs, setBlogs] = useState<BlogPost[]>()

    useEffect(()=>{
        (async()=>{
            const res = await fetch('/public/blogs/data.json')
            const data = await res.json()
            setBlogs(data);
        })()
    }, [])

    if(!blogs){
        return null
    }

    return (
        <Layout>
            { blogs 
                ? (
                    blogs.map(data=>{
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

export default Blogs
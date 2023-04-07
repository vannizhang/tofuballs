import React, { useEffect, useState } from 'react'
import { BLOG_POSTS_DIRECTORY } from '../constants'
import { Location } from 'react-router';
import useBlogPosts, { BlogPostData } from './useBlogPosts';

/**
 * Get the markdown file name based on the current URL location data
 * @param location 
 * @returns 
 * 
 * @example
 * usage
 * ```
 * getMarkdownFileName({
 *  pathname: '/blog/hello-world'
 * })
 * ```
 * 
 * returns
 * ```
 * 'hello-world.md'
 * ```
 */
const getMarkdownFileName = (location:Location)=>{
    
    const paths = location.pathname.split('/')

    while(!paths[paths.length - 1]){
        paths.pop();
    }

    const fileName = paths.pop();

    return fileName 
        ? `${fileName}.md` 
        : ''
}

const useBlogPost = (location:Location) => {
    const fileName = getMarkdownFileName(location);

    /**
     * text content of the markdown file
     */
    const [markdownContent, setMarkdownContent] = useState<string>();
    
    /**
     * blog post data that contains file name and creation date
     */
    const [blogPostData, setBlogPostData] = useState<BlogPostData>();

    /**
     * if true, the markdown file is not found from the blogs directory
     */
    const [notFound, setNotFound] = useState(false);

    const posts = useBlogPosts();
    
    useEffect(()=>{
        (async()=>{
            try {
                const res = await fetch(`${BLOG_POSTS_DIRECTORY}/${fileName}`);

                if(res.status === 404){
                    throw new Error('not found');
                }

                const text = await res.text()
                setMarkdownContent(text)

                // setLastModified(res.headers.get('last-modified'))
                
            } catch(err){
                setNotFound(true)
            }
        })()
    }, [fileName])

    useEffect(()=>{
        if(posts){
            const data = posts.find(
                post=>post.fileName === fileName
            )
            setBlogPostData(data);
        }
    }, [posts])

    return {
        markdownContent,
        notFound,
        blogPostData
    }
}

export default useBlogPost
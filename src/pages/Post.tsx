import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import { useNavigate, useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { format } from 'date-fns';

const BLOG_CONTENT_CONTAINER_CLASSNAME = `blog-content`

const BlogPost = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [markdown, setMarkdown] = useState<string>();

    const [notFound, setNotFound] = useState(false);

    /**
     * last modified date from response headers
     */
    const [lastModified, setLastModified] = useState<string>();

    /**
     * the markdown content itself dosen't contain last modified date in it.
     * 
     * But we still want to display the last modified date (from response headers) below the title of the blog post.
     * and the only way that I can come up with at is appending an element to the title of the blog
     */
    const insertModifiedDate = ()=>{
        // find the first element inside of blog content, which should be the title of the blog
        const title = document.querySelector(`.${BLOG_CONTENT_CONTAINER_CLASSNAME} > :first-child`)

        // abort if there if no child element,
        // or the first child is one of the <h1> to <h6> tags.
        if(!title || title.tagName.startsWith('H') === false){
            return
        }

        // create an element to show the last modified date of this blog post
        const modifiedDate = document.createElement('div');
        modifiedDate.className = 'mt-2 mb-4 opacity-70 text-sm font-light'
        modifiedDate.textContent = format(new Date(lastModified), 'yyyy-MM-dd')

        title.append(modifiedDate)
    }

    useEffect(()=>{
        if (notFound) {
            navigate("/404");
        }
    }, [notFound])

    useEffect(()=>{
        (async()=>{

            const paths = location.pathname.split('/')

            while(!paths[paths.length - 1]){
                paths.pop();
            }

            const fileName = paths.pop();

            try {
                const res = await fetch(`/public/blog/${fileName}.md`);

                if(res.status === 404){
                    throw new Error('not found');
                }

                const text = await res.text()
                setMarkdown(text)

                setLastModified(res.headers.get('last-modified'))
                
            } catch(err){
                setNotFound(true)
            }
        })()
    }, [location])

    useEffect(()=>{
        if(markdown && lastModified){
            insertModifiedDate();
        }
    }, [markdown, lastModified])

    return (
        <Layout>
            <div className={BLOG_CONTENT_CONTAINER_CLASSNAME}>
                <ReactMarkdown
                    /**
                     * Use SyntaxHighlighter to overwrite the default way of handling syntax highlight
                     * @see https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
                     */
                    components={{
                        code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={vscDarkPlus as any}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                            {children}
                            </code>
                        )
                        }
                    }}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </Layout>
    )
}

export default BlogPost
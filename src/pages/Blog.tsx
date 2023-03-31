import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import { useNavigate, useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'

const Blog = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [markdown, setMarkdown] = useState<string>()

    const [notFound, setNotFound] = useState(false);

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
                const res = await fetch(`/public/blogs/${fileName}.md`);

                if(res.status === 404){
                    throw new Error('not found');
                }

                const text = await res.text()
                setMarkdown(text)
                
            } catch(err){
                setNotFound(true)
            }
        })()
    }, [location])

    return (
        <Layout>
            <div className='blog-content'>
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

export default Blog
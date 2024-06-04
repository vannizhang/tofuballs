import React, { useEffect } from 'react';
import { Layout } from '../components';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { format } from 'date-fns';
import useBlogPost from '../hooks/useBlogPost';

const BLOG_CONTENT_CONTAINER_CLASSNAME = `blog-content`;

const BlogPost = () => {
    const navigate = useNavigate();

    const { markdownContent, notFound, blogPostData } = useBlogPost();

    // /**
    //  * the markdown content itself dosen't contain creation date in it.
    //  *
    //  * But we still want to display the creation date below the title of the blog post.
    //  * and the only way that I can come up with at is appending an element to the title of the blog
    //  */
    // const insertCreationDate = () => {
    //     const { createdDate } = blogPostData;
    //     console.log(createdDate)

    //     // find the first element inside of blog content, which should be the title of the blog
    //     const title = document.querySelector(
    //         `.${BLOG_CONTENT_CONTAINER_CLASSNAME} > :first-child`
    //     );

    //     // abort if there if no child element,
    //     // or the first child is one of the <h1> to <h6> tags.
    //     if (!title || title.tagName.startsWith('H') === false) {
    //         return;
    //     }

    //     console.log(title)

    //     // create an element to show the last modified date of this blog post
    //     const creationDateElem = document.createElement('div');
    //     creationDateElem.className = 'mt-2 mb-4 opacity-70 text-sm font-light';
    //     creationDateElem.textContent = format(
    //         new Date(createdDate),
    //         'yyyy-MM-dd'
    //     );

    //     title.append(creationDateElem);
    // };

    useEffect(() => {
        if (notFound) {
            navigate('/404');
        }
    }, [notFound]);

    // useEffect(() => {
    //     if (markdownContent && blogPostData) {
    //         insertCreationDate();
    //     }
    // }, [markdownContent, blogPostData]);

    return (
        <Layout>
            <div className={BLOG_CONTENT_CONTAINER_CLASSNAME}>
                <ReactMarkdown
                    /**
                     * Use SyntaxHighlighter to overwrite the default way of handling syntax highlight
                     * @see https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight
                     */
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(
                                className || ''
                            );
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    // children={String(children).replace(/\n$/, '')}
                                    style={vscDarkPlus as any}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </Layout>
    );
};

export default BlogPost;

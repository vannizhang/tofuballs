import React, { useEffect, useState } from 'react';
import { BLOG_POSTS_DATA } from '../constants';

export type BlogPostData = {
    /**
     * name of the markdown file (saved in `/public/blog/`) for this blog post (e.g. `hello-world.md`)
     */
    fileName: string;
    /**
     * created date in unix timestamp
     */
    createdDate: number;
};

/**
 * This hook fetches the the JSON data that contains an array of Blog Posts
 * @returns
 */
const useBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPostData[]>();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${BLOG_POSTS_DATA}`);
            const data = await res.json();
            setPosts(data);
        })();
    }, []);

    return posts;
};

export default useBlogPosts;

const fs = require('fs');
const path = require('path')

/**
 * directory of where the blog markdown files are saved 
 */
const BLOG_DIRECTORY_PATH = path.join(__dirname, '..', 'public', 'blog');

/**
 * path of the JSON file that contains a list of blog
 */
const BLOG_JSON_FILE_PATH = path.join(BLOG_DIRECTORY_PATH, 'data.json');

/**
 * Retrieves the existing blog posts from JSON file located at BLOG_JSON_FILE_PATH.
 * 
 * If the JSON file does not exist in the directory, just return an empty array instead.
 * 
 * @example
 * Usage
 * ```
 * getExistingBlogPosts()
 * ```
 * 
 * Returns
 * ```
 * [
 *   {
 *     "fileName": "hello-world.md",
 *     "createdDate": 1680299193000
 *   }
 * ]
 * 
 * ```
 * @returns 
 */
const getExistingBlogPosts = ()=>{
    if(fs.existsSync(BLOG_JSON_FILE_PATH) === false){
        return [];
    }

    try {
        const content = fs.readFileSync(BLOG_JSON_FILE_PATH);
    
        return JSON.parse(content);

    } catch(err){
        return []
    }
}

/**
 * Iterate through all files from the `/public/blog` directory and 
 * generate `data.json` file that contains all blog posts to be shown on the blog page
 */
const start = ()=>{

    // retrieves the existing blog posts from the JSON file located at BLOG_JSON_FILE_PATH
    let posts = getExistingBlogPosts() || [];

    // creates a new array that contains only the names of the files in the existing blog posts.
    const existingFileNames = posts.map(d=>d.fileName);

    // retrieves the list of files in the blog directory
    const files = fs.readdirSync(BLOG_DIRECTORY_PATH)

    // add new files to posts array
    for(const file of files){
        // only handle markdown files that the name is not 'example.md'
        if(file.endsWith('.md') === false || file === 'example.md'){
            continue;
        }

        // checks if the name of the current item already exists in the existingFileNames array. If it does, the loop will continue to the next item.
        if(existingFileNames.includes(file)){
            continue
        }

        // retrieves the modified time of the current file
        const {
            mtime
        } = fs.statSync(`${BLOG_DIRECTORY_PATH}/${file}`)

        posts.push({
            fileName: file,
            createdDate: mtime.getTime()
        })
    }

    // remove data from posts array if the markdown file associated with it no longer exists 
    posts = posts.filter(post=>{
        return files.includes(post.fileName)
    })

    // sorts the posts array in descending order based on the creation time of each post
    //  so that the most recent post is at the top of the list.
    posts.sort((a,b)=>b.createdDate - a.createdDate)

    // writes the updated posts array to a JSON file located at BLOG_JSON_FILE_PATH 
    fs.writeFileSync(
        BLOG_JSON_FILE_PATH, 
        JSON.stringify(posts, null, 4)
    );
}

start();
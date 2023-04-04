const fs = require('fs');
const path = require('path')

/**
 * directory of where the blog markdown files are saved 
 */
const blogsDir = path.join(__dirname, '..', 'public', 'blogs');

/**
 * name of the JSON file that contains a list of blogs
 */
const OUTPUT_JSON_FILE_NAME = `data.json`;

/**
 * Iterate through all files from the `/public/blogs` directory and 
 * generate `data.json` file that contains all blog posts to be shown on the blogs page
 */
const start = ()=>{

    /**
     * array of blog posts info
     * 
     * @example
     * ```
     * [
     *   {
     *     "fileName": "hello-world.md",
     *     "lastModified": 1680299193000
     *   }
     * ]
     * 
     * ```
     */
    const output = [];

    // get all files from blogs directory
    const items = fs.readdirSync(blogsDir)

    for(const item of items){
        // only handle markdown files that the name is not 'example.md'
        if(item.endsWith('.md') === false || item === 'example.md'){
            continue;
        }

        const {
            mtime
        } = fs.statSync(`${blogsDir}/${item}`)

        output.push({
            fileName: item,
            lastModified: mtime.getTime()
        })
    }

    // sort items using the last modified date in a descending order 
    // so the most recent blogs will alway be on the top of the list
    output.sort((a,b)=>b.lastModified - a.lastModified)

    fs.writeFileSync(
        `${blogsDir}/${OUTPUT_JSON_FILE_NAME}`, 
        JSON.stringify(output, null, 4)
    );
}

start();
const fs = require('fs');
const path = require('path')

/**
 * directory of docs folder 
 */
const DOCS_PATH = path.join(__dirname, '..', 'docs');

/**
 * path of the `CNNAME` file
 */
const CNAME_FILE_PATH = path.join(DOCS_PATH, 'CNAME')

/**
 * The documentation of the GitHub Pages, a `CNAME` file should be included in the root of your publishing source, which is `docs` folder for our case.
 * Then, make sure the CNAME file is formatted correctly:
 * - The CNAME filename must be all uppercase.
 * - The CNAME file can contain only one domain. To point multiple domains to your site, you must set up a redirect through your DNS provider.
 * - The CNAME file must contain the domain name only. For example, www.example.com, blog.example.com, or example.com.
 * - The domain name must be unique across all GitHub Pages sites. For example, if another repository's CNAME file contains example.com, you cannot use example.com in the CNAME file for your repository.
 * 
 * @see https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages#cname-errors
 */
const run = ()=>{
    try {
        fs.writeFileSync(
            CNAME_FILE_PATH, 
            'tofuballs.com'
        );

        console.log('added CNAME file to docs folder');
    } catch(err){
        console.log(err)
    }
};

run();
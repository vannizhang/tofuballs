# Tofuballs 

Jinnan Zhang's portfolio site, please visit: https://tofuballs.com

## Add a new Blog Post

Here are the steps to add a new blog post to tofuballs.

1. add a new markdown file to `./public/blogs`, the name of the markdown file should use lowercase words separated by dash (e.g. `hello-world.md`)
2. Update `./public/blogs/data.json` to include recently added blog post.
3. Run `npm run start` and the new blog post should be available at `http://localhost:8080/#/blog/{{name-of-blog}}`
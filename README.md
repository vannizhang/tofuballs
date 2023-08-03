# Tofuballs 

Jinnan Zhang's portfolio site.

This site is hosted on GitHub Pages using a custom domain - https://tofuballs.com

## Add a new Blog Post

Here are the steps to add a new blog post to tofuballs.

1. add a new markdown file to `./public/blog`, the name of the markdown file should use lowercase words separated by dash (e.g. `hello-world.md`)
2. The `prestart` and `prebuild` hooks will get triggered automatically before running `npm run start` and `npm run build` commands. It calls `npm run populateBlogList` to include recently added blog post to `./public/blog/data.json`.
3. Run `npm run start` and the new blog post should be available at `http://localhost:8080/#/blog/{{name-of-blog}}`

## Deployment
1. run `npm run build` to generate site files in `docs` folder
2. the `postbuild` hook will get triggered `./scripts/createCNAME.js` that creates a `CNAME` file in `docs` folder, which is required by GitHub pages site that uses the custom domain, [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages#cname-errors) to learn more.
3. push to GitHub and you should be able to see the changes.
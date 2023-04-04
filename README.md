# Tofuballs 

Jinnan Zhang's portfolio site, please visit: https://tofuballs.com

## Add a new Blog Post

Here are the steps to add a new blog post to tofuballs.

1. add a new markdown file to `./public/blogs`, the name of the markdown file should use lowercase words separated by dash (e.g. `hello-world.md`)
2. Update `./public/blogs/data.json` to include recently added blog post.
3. Run `npm run start` and the new blog post should be available at `http://localhost:8080/#/blog/{{name-of-blog}}`

## Deployment via GitHub Actions

1. created a new workflow using `Node.js` workflow template, modified the workflow to use self-hosted runner.
    ```yml
    # This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
    # For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

    name: Node.js CI

    on:
    push:
        branches: [ "master" ]
    pull_request:
        branches: [ "master" ]

    jobs:
    build:

        # use self hosted runner
        runs-on: self-hosted

        strategy:
        matrix:
            node-version: [16.x]
            # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

        steps:
        - uses: actions/checkout@v3
        - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
            node-version: ${{ matrix.node-version }}
            cache: 'npm'
        - run: npm ci
        - run: npm run build --if-present

        # Clean up files in Destination folder
        - run: sudo rm -r ${{secrets.COPY_TO_FOLDER}}
        # Copy folder to where nginx expects it to be
        - run: sudo cp -r ${{secrets.COPY_FROM_FOLDER}} ${{secrets.COPY_TO_FOLDER}}
    ```

2. Go to [Runners](https://github.com/vannizhang/tofuballs/settings/actions/runners) page and created a new self-hosted runner by following the instructions provided there.

3. Here is the self-hosted runner that I created on vannizhang.com VPS: `/home/vannizhang/tofuballs.com-actions-runner/`

4. Go to [Actions secrets and variables](https://github.com/vannizhang/tofuballs/settings/secrets/actions) page and created these two Repository secrets:
    - COPY_FROM_FOLDER: `/home/vannizhang/tofuballs.com-actions-runner/_work/tofuballs/tofuballs/dist`
    - COPY_TO_FOLDER: `/var/www/tofuballs.com/html`

5. Follow instructions from this [page](https://docs.github.com/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service) to configure the self-hosted runner application as a service to automatically start the runner application when the machine starts.
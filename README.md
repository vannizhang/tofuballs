# Tofuballs 

Jinnan Zhang's portfolio site, please visit: https://tofuballs.com

## Add a new Blog Post

Here are the steps to add a new blog post to tofuballs.

1. add a new markdown file to `./public/blogs`, the name of the markdown file should use lowercase words separated by dash (e.g. `hello-world.md`)
2. Update `./public/blogs/data.json` to include recently added blog post.
3. Run `npm run start` and the new blog post should be available at `http://localhost:8080/#/blog/{{name-of-blog}}`

## Setting up a Self-Hosted Runner for Node.js Workflow

To use a self-hosted runner in a Node.js workflow, you'll need to follow these steps:

1. Create a new workflow using the Node.js workflow template. To do this, go to your repository on GitHub and click on the "Actions" tab. Then, click on the "New workflow" button and select the Node.js template.
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
2. Modify the workflow to use a self-hosted runner. To do this, you'll need to go to the workflow file (e.g. `.github/workflows/node.js.yml`) and update the runs-on field to use the value of `self-hosted`.

3. Create a new self-hosted runner by following the instructions provided on the [Runners](https://github.com/vannizhang/tofuballs/settings/actions/runners) page. You'll need to download and run the self-hosted runner application on the machine that you want to use as your runner.

2. Go to [Runners](https://github.com/vannizhang/tofuballs/settings/actions/runners) page and created a new self-hosted runner by following the instructions provided there. Here is the self-hosted runner that I created on vannizhang.com VPS: `/home/vannizhang/tofuballs.com-actions-runner/`

4. Once you've set up the self-hosted runner, you'll need to configure some repository secrets that will be used by the workflow. To do this, go to the [Actions secrets and variables](https://github.com/vannizhang/tofuballs/settings/secrets/actions) page and click on "New Repository Secrets". Then, create two new secrets with the following names and values:
    - `COPY_FROM_FOLDER`: The source folder that you want to copy files from. For example, `/home/vannizhang/tofuballs.com-actions-runner/_work/tofuballs/tofuballs/dist`
    - `COPY_TO_FOLDER`: The destination folder that you want to copy files to. For example, `/var/www/tofuballs.com/html`

5. Finally, you'll need to configure the self-hosted runner application as a service to automatically start the runner application when the machine starts. To do this, follow the instructions provided on this [page](https://docs.github.com/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service).

With these steps completed, your Node.js workflow should now be able to use your self-hosted runner to run jobs on the machine you've configured as the runner.
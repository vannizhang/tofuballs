# How to Create a NPM Package with TypeScript and Webpack

In my [last post](http://localhost:8080/#/blog/How-to-Create-a-NPM-Package), I talked about making an NPM package without using a bundler like Webpack, which I think should be a preferred option whenever you can. But sometimes, you have to use a bundler. For example, if you need to turn your NPM package into a UMD bundle so it can be used in a script tag (`<script src="..."></script>`). Another time you'll need a bundler is when you're building NPM packages for reusable React components that need to include other resources like CSS files in the bundles. In this blog post, I'll show you how to make an NPM package with Webpack.

Many of the steps below will be similar to the ones I explained in my [last post](https://tofuballs.com/#/blog/How-to-Create-a-NPM-Package). So, I'll keep my explanation less verbose for some of those steps here. If you want more details, you can check out the [previous post](https://tofuballs.com/#/blog/How-to-Create-a-NPM-Package).

## Initializing a New Scoped NPM Package

To initialize a new [scoped NPM package](https://docs.npmjs.com/cli/v9/using-npm/scope), run the following command:
```sh
npm init --scope=@your_npm_account_username
```

Then, respond to the prompts to create a `package.json` file. Here's an example of what your `package.json` file should look like::

```js
{
    "name": "@your_npm_account_username/my-umd-package",
    "version": "1.0.0",
    "description": "My awesome UMD package",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "files": [
        "dist"
    ],
    //...
}
```

## Updating the `package.json` File

Let's update the `package.json` to have the `main`, `types`, and `files` fields point to the `dist` folder.

```js
{   
    //...
    "main": "dist/index.js",
    "types": "dist/index.d.ts", 
    "files": [
        "dist/**/*"
    ],
}
```

## Create a `.npmignore` File:
To keep unwanted files out of your package, you can create a .npmignore file. Here is an example of what your `.npmignore` file could look like:

```
src
tsconfig.json
jest.config.js
.eslintrc.js
.prettierrc.js
.eslintcache
.husky/
```

## Installing and Configuring TypeScript:

To install TypeScript as a development dependency, run the following command:
```sh
npm install typescript --save-dev
```

After installing TypeScript, create a `tsconfig.json` file in the root directory to configure TypeScript:
```js
{
    "compilerOptions": {
        "declaration": true,
        "outDir": "dist",
        "module": "commonjs",
        // Modern browsers support all ES6 features, so ES6 is a good choice. 
        "target": "es6",
        "esModuleInterop": true,
        "sourceMap": true
    },
    "include": ["src/**/*"],
    "exclude": [
        "node_modules", 
        "**/*.spec.ts",
        "**/*.test.ts"
    ]
}
```

## Installing `ts-loader`
To load and compile TypeScript files in our project, you will need to use `ts-loader`. `ts-loader` is a good choice because it can ensure that `webpack` correctly processes TypeScript files and generates **declaration files** in the output directory.

```sh
npm install ts-loader --save-dev
```

## Installing and Setting up Webpack
To install webpack and necessary plugins, run the following command in your terminal:

```sh
npm install webpack webpack-cli -D
```

Once the installation is complete, create a `webpack.config.js` file in the root of your project with the following code:
```js
const path = require('path');
const package = require('./package.json');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    
    /**
     * This exposes your library under all the module definitions, allowing it to work with CommonJS, AMD and as a global variable. 
     * In order to use `libraryTarget: 'umd'`, we need the `library` property to name your module.
     * Note that omitting the library will result in the assignment of all properties returned by the entry point be assigned directly to the root object
     * @see https://webpack.js.org/configuration/output/#librarytarget-umd
     */
    libraryTarget: 'umd',
    /**
     * name of the library, (e.g., '@your_npm_account_username/my-umd-package') 
     */
    library: package.name,
    /**
     * To make UMD build available on both browsers and Node.js, set output.globalObject option to 'this'.
     * @see https://webpack.js.org/configuration/output/#outputglobalobject
     */
    globalObject: 'this',
    /**
     * clean the /dist folder before each build
     */
    clean: true,
  },
  /**
   * The resolve configuration in webpack.config.js tells Webpack which file extensions it should try when resolving module imports.
   * Specifically, the extensions option specifies an array of file extensions that Webpack should look for when resolving imports.
   */
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
  },
  module: {
    rules: [
      // use ts-loader to load TypeScript files
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    //...
  ],
};
```

We specify the `libraryTarget`, `library` and `globalObject` properties in the `output` object to tell Webpack to generate our output as a UMD bundle. 

## Add your code

To add your code, create a `src` directory and write TypeScript code inside this directory. Next, create an entry file for your package (e.g., `index.ts`) and write the package code inside this file

Here is an example of the `./src/index.ts` file:

```js
export const greeting = (name:string):string=>{
    return `hello ${name}`
}
```

## Build the package
Finally, add the following scripts to your `package.json` file:

```js
{
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
}
```

These scripts allow you to compile your package using Webpack in development or production mode using `npm run dev` or `npm run build` commands, respectively. The `--mode` flag specifies the mode for Webpack to use.

## Publish Your NPM Package
I am not going to cover the sections of Setting up Jest; Test npm package locally; and Add pre & post and lifecycle scripts in this post as they should be the same. Just follow the instructions from the [last post](https://tofuballs.com/#/blog/How-to-Create-a-NPM-Package).

Once your codes are done and tested, you can publish your package to the NPM registry. Before publishing your package, make sure to run the `npm run build` command first to build the bundle.

To make the first release of your package, use the following command:
```shell
npm publish
```

If your package is a scoped package (e.g. `@your-username/package-name`), add the `-access` flag after `npm publish`:
```shell
npm publish --access public
```

## Use the NPM package via `unpkg`

After publishing a bundled NPM package, it becomes available on [`unpkg`](https://www.unpkg.com/), which allows users to load the bundled script from the package via a `<script>` tag, enabling them to use it immediately without needing to install it.

Another benefit of bundling your package is that all dependencies are included in the bundle.

Here is an example of consuming the published NPM package via unpkg:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <script src="https://unpkg.com/@your_npm_account_username/my-umd-package@1.0.0/dist/index.js"></script>
    </head>
    <body>
        <script>
            const myUMDPackage = window['@your_npm_account_username/my-umd-package'];
            // You can call the `greeting` function from the package
            console.log(myUMDPackage.greeting('vanni')) 
        </script>
    </body>
</html>
```

## Conclusion
By bundling an npm package, you can make it easier for users to use your package, as they don't need to install dependencies manually. This can lead to faster adoption and a better user experience. Additionally, by including all dependencies in the bundle, you can avoid version conflicts that can arise when users have different versions of the same dependencies installed.

Ultimately, the decision to bundle your npm package should be based on your specific use case and the needs of your users. If bundling your package would provide a significant benefit, such as improved performance or ease of use, then it may be worth considering. However, if bundling is not necessary for your package, it may be better to avoid it to keep the package simpler and easier to maintain.
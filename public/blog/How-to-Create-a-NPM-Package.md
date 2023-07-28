# How to Create a NPM Package with TypeScript 
This blog post is a step-by-step guide on how to create and publish a NPM package with TypeScript. 

It will not use any bundler tool (e.g. `Webpack`) to bundle multiple files together. Instead, it will just use `tsc` to compile TypeScript code to JavaScript, which generates individual JavaScript files for each TypeScript file. I think this is a good option for a simple library with a small codebase and is intended to be used in a Node.js environment. Here is a good [blog post](https://cmdcolin.github.io/posts/2022-05-27-youmaynotneedabundler) explaining why you may not need a bundler for your NPM library.

Here is a [template repository](https://github.com/vannizhang/npm-package-boilerplate) that you can use as a starter-kit because it has already having all of these settings below included.

## Initializing a New Scoped NPM Package

Scoped packages are a way to group related npm packages together. They are preceded by an `@` symbol and followed by the name of the organization or user that created the package. I prefer using scoped NPM packages as they help prevent naming collisions, which allows me to choose a short and easy to remember name for my NPM package.

To initialize a new [scoped NPM package](https://docs.npmjs.com/cli/v9/using-npm/scope), run the following command:
```sh
npm init --scope=@your_npm_account_username
```

Then, respond to the prompts to create a `package.json` file. Here's an example of what your `package.json` file should look like::

```js
{
    "name": "@vannizhang/my-package",
    "version": "1.0.0",
    "description": "My awesome package",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "files": [
        "dist"
    ],
    "keywords": [
        "awesome",
        "package"
    ],
    "author": "Vanni Zhang",
    "license": "MIT",
    //...
}
```

## Updating the package.json File

In addition to initializing the `package.json` file, we also need to update it to have the `main`, `types`, and `files` fields point to the `dist` folder.

- The `main` property is important because it tells NPM where it can import the modules from.
- The `types` property tells TypeScript and code editors where to find the type definitions.

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

## Installing TypeScript

To install TypeScript as a development dependency, run the following command:

```sh
npm install typescript --save-dev
```

### Configuring TypeScript

After installing TypeScript, create a tsconfig.json file in the root directory to configure TypeScript. Here is an example of a tsconfig.json file:
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

The `compilerOptions` object specifies various options for the TypeScript compiler, such as enabling declaration files, specifying the output directory, and configuring the module and target settings.

In this example, the target is set to `es6`, which is a good choice since modern browsers support all ES6 features.

The include property tells the TypeScript compiler which files to include in the compilation process. In this example, all files in the `src` directory and its subdirectories will be included.

Add a build script to the `package.json` file to compile the TypeScript code to JavaScript:
```js
{
    "scripts": {
        "build": "tsc"
    }
}
```

## Create a `.npmignore` File:

To keep unwanted files out of your package, you can create a .npmignore file. Here is an example of what your .npmignore file could look like:

```txt
src
tsconfig.json
jest.config.js
.eslintrc.js
.prettierrc.js
.eslintcache
.husky/
```

In this example, we are ignoring the `src` directory, TypeScript configuration file `tsconfig.json`, Jest configuration file `jest.config.js`, ESLint configuration file `.eslintrc.js`, Prettier configuration file .`prettierrc.js`, ESLint cache `.eslintcache`, and Husky configuration directory `.husky/`.

By using the `.npmignore` file, you can ensure that your package only includes the necessary files and doesn't contain any extraneous or sensitive information.

## Add your code

To add your code, create a `src` directory and write TypeScript code inside this directory. It's recommended to put the source code in the `src` directory and the compiled code in the dist directory.

Next, create an entry file for your package (e.g., `index.ts`) and write the package code inside this file. This file should import and export the necessary functions and classes.

Here is an example of the `./src/index.ts` file:

```js
import {
    greeting
} from './greeting'

export {
    greeting
}
```

In this example, we are importing the `greeting` function from a `greetings.ts` file and exporting it so that it can be used in other parts of the code.

Here is an example of the `./src/greeting/index.ts` file:

```js
export const greeting = (name:string):string=>{
    return `hello ${name}`
}
```

## Setting up Jest
It is good practice to add unit tests to our library. Jest is well-suited for testing the functionality of your NPM package. It allows you to write unit tests, integration tests, and snapshot tests to ensure that your package behaves as expected.

To set up Jest for testing your TypeScript code, you can follow these steps:
```sh
npm install jest @types/jest ts-jest -D
```

`jest` is the testing framework, `@types/jest` provides TypeScript types for Jest, and `ts-jest` is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript.

Create a configuration file for `ts-jest` using this command:
```sh
npx ts-jest config:init
```

This command will generate a `jest.config.js` file at the root level of your project with the following content:
```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
```

This configuration file tells Jest to use ts-jest as a preprocessor for TypeScript files and sets the test environment to node.

To run the tests using Jest, you can add a `test` script to the `package.json` file:
```js
{
    "scripts": {
        "test": "jest --config jest.config.js"
    }
}
```

This script tells NPM to run Jest with the configuration file that we created earlier. To run the tests, you can now simply execute `npm run test` in your terminal.

Here is an example of a unit test that we can create for the `greeting` function that we created in the previous section:

```js
import { greeting } from '.';

describe('test greeting', () => {
    it('should return correct greeting message', () => {
        expect(greeting('vannizhang')).toBe('hello vannizhang');
    });
});
```

By including unit tests like this one in our library, we can ensure that our code is functioning correctly and catch any errors or regressions that may arise as we continue to develop and modify our code.


## Build the package
Before building your package, it is a good practice to clean the `./dist` folder. You can use the `rimraf` package to do this. First, install `rimraf` as a development dependency:

```sh
npm install rimraf --save-dev
```

Then, add a script to your `package.json` file that cleans the dist folder:

```js
{
    "scripts": {
        "clean": "rimraf dist",
        "build": "npm run clean && tsc"
    },
}
```
This script first runs the clean script to remove the `dist` folder, then runs the TypeScript compiler to build your package. By doing this, you ensure that your package is always built from a clean slate.

## Test npm package locally

To test an npm package locally, you can follow these steps:

- Run `npm pack` command in your terminal, which will create a compressed tarball of your package in the root directory of your package (e.g. `my-package-1.0.0.tgz`).
- Next, navigate to the directory where you want to test your package.
- Run `npm install /path/to/your/my-package-1.0.0.tgz` command in your terminal to install the package from the tarball.
- Once the package is installed, you can use it in your code and test it as needed.

Alternatively, you can also use `npm link` to link your package globally, so that you can test it in a separate project without having to install it each time. Here are the steps to use npm link:

- Run `npm link` command in your terminal to create a global symlink of your package.
- Next, navigate to the directory where you want to test your package.
- Run `npm link <package-name>` command in your terminal to link your package to the current project.
- Once the package is linked, you can use it in your code and test it as needed.

Both `npm pack` and `npm link` methods have their own advantages and limitations, and which method is better depends on your specific use case.

`npm pack` method is useful when you want to distribute your package to others or publish it to the npm registry. It creates a compressed tarball of your package that can be easily shared with others. You can also use `npm pack` to test your package locally before publishing it.

On the other hand, `npm link` method is useful when you want to test your package locally in a separate project without having to install it each time. It creates a global symlink of your package, so any changes you make to the package will be reflected immediately in the linked project.

If you're working on a package that you plan to **publish to the npm registry**, it's recommended to use `npm pack` method to test and distribute your package. However, if you're working on a package that you only need to use in a separate project, npm link method might be more convenient and efficient for testing and development purposes.

## Add pre & post and lifecycle scripts:

Before publishing the package, let's add couple more scripts:

`prepare` will run both BEFORE the package is packed and published, and on local npm install. Perfect for running building the code. Add this script to `package.json`:

```js
{
    "scripts": {
        //...
        "prepare" : "husky install && npm run build"
    },
}
```

`prepublishOnly` will run BEFORE prepare and ONLY on npm publish. Here we will run our test and lint to make sure we don’t publish bad code:

```js
{
    "scripts": {
        //...
        "prepublishOnly" : "npm run test && npm run lint"
    },
}
```

`preversionwill` run before bumping a new package version. To be extra sure that we’re not bumping a version with bad code, why not run lint here as well?

```js
{
    "scripts": {
        //...
        "preversion" : "npm run lint"
    },
}
```

`version` will run after a new version has been bumped. If your package has a git repository, like in this case, a commit and a new version-tag will be made every time you bump a new version. 

This command will run BEFORE the commit is made. One idea is to run the lint here and so no ugly code will pass into the new version:

```js
{
    "scripts": {
        //...
        "version" : "npm run lint && git add -A src"
    },
}
```

`postversion` will run after the commit has been made. A perfect place for pushing the commit as well as the tag.

```js
{
    "scripts": {
        //...
        "postversion" : "git push && git push --tags"
    },
}
```

Here are all the scripts that we have added so far:
```js
{
    "scripts": {
        "test": "jest --config jest.config.js",
        "clean": "rimraf dist",
        "build": "npm run clean && tsc",
        "lint": "eslint src --ext .tsx,.ts --cache --fix",
        "prepare": "husky install && npm run build",
        "prepublishOnly": "npm run test && npm run lint",
        "version": "npm run lint && git add -A src",
        "postversion": "git push && git push --tags"
    },
}
```

## Publish Your NPM Package
Once your codes are done and tested, you can publish your package to the NPM registry. First, run `npm login` to login to your NPM account.

Before publishing your package, there is no need to manually run the `npm run build` command as it will be executed automatically by the `prepare` script. This script is triggered when you run the `npm publish` command, and it ensures that your code is compiled and ready for distribution.

### Making Your First Release:

To make the first release of your package, use the following command:
```shell
npm publish
```

If your package is a scoped package (e.g. `@your-username/package-name`), add the `-access` flag after `npm publish`:
```shell
npm publish --access public
```

### Making Patch/Minor/Major Releases:

To bump up a new version of the package, use the following commands:
```shell
# Patch release: Backward compatible bug fixes
npm version patch

# Minor release: Backward compatible new features
npm version minor

# Major release: Changes that break backward compatibility
npm version major
```

After bumping up the version, publish again using:
```shell
npm publish
```

## Conclusion

Now you have learnt how to create a NPM package with TypeScript. In the next post, I'll walk you through creating an NPM package with TypeScript, but this time we'll use a bundler tool like Webpack.
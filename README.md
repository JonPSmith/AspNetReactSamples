# AspNetReactSamples

Wecome to this ASP.NET solution which contains examples of how to incorporate, build and Unit Test 
[React](https://facebook.github.io/react/) front-end inside an ASP.NET Core and ASP.NET MVC5 
application. 

### This solution is supported by an article [???? to come ????](#) that goes through the examples in detail.

The example projects are designed to be scalable up to a real-world, production-ready applications
with full build, test, and deploy capabilities. 
The features I have covered in these examples are:

- Ability to build one big SPA, and/or multiple small React components.
- Ability to build a production, minified JavaScript files.
- Ability to run the code locally and debug it.
- Ability to Unit Test the React code, and debug it.
- The build process must work on ASP.NET Core and ASP.NET MVC5
- The build process must be automatable.

Licence: MIT

## What is included in this solution

The solution *currently* contains the following solutions:

1. **ReactJsNet.MVC5:** A simple example of using the [ReactJS.Net](http://reactjs.net/)
package to on-the-fly convert React JSX files to currently supported, e.g. ES5, JavaScript.
**(Note: Also available for ASP.NET Core, see [this NuGet package](https://www.nuget.org/packages/React.AspNet/)).
2. **ReactWebPack** This is a more complex React application which is built using 
the [WebPack module bundler](https://webpack.github.io/) and [Babel Transpiler](http://babeljs.io/)
  - **ReactWebPack.MVC5** is a ASP.NET MVC5 version
3. **

## How to try the examples

If you clone/copy this GitHub Repository then you need to:

#### 1. Make sure your computer is set up properly

I assume you are running Visual Studio 2015, which includes Node.js.
*NOTE: You can use Visual Studio 2013, but you need to install the 
[Task Runner Explorer](https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708) 
for VS 2013, which I believe includes Node.js.*

You should also load the [NPM Task Runner](https://visualstudiogallery.msdn.microsoft.com/8f2f2cbc-4da5-43ba-9de2-c9d08ade4941)
extension, which you need to run the build/debug scripts from Visual Studio.

If you want to use [Visual Studio Code](https://code.visualstudio.com/) 
to run some of the build/test command scripts then you need load the extension
[VSCode NPM Scripts](https://github.com/Microsoft/vscode-npm-scripts) extension.

#### 2. Look at the README.md file for the project you want to run

Each project has its own README.md file which tells you how to:

1. Restore any packages (if required)
2. How to run whatever application/process that is in that project.


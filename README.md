# AspNetReactSamples

Wecome to this ASP.NET solution which contains examples of how to incorporate, build and Unit Test 
[React](https://facebook.github.io/react/) front-end inside an ASP.NET Core (RC2) and ASP.NET MVC5 
application. 

**Licence: MIT**

### This solution is supported by the article [React Templates](http://www.thereformedprogrammer.net/templates-for-building-react-front-ends-in-asp-net-core-and-mvc5/) that goes through the examples in detail.

The example projects are designed to be scalable up to a real-world, production-ready applications
with full build, test, and deployment capabilities. 

#### UPDATE: New article [Using Redux in React.js app](http://www.thereformedprogrammer.net/using-a-redux-store-in-your-react-js-application/) now out.

This new article covers the changes made to the [ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2)
Kanban application to use the [Redux](http://redux.js.org/) store instead of the
[Flux](https://facebook.github.io/flux/docs/overview.html) store.


## What is included in this solution

The solution *currently* contains the following solutions:

1. **[ReactJsNet.MVC5](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactJsNet.MVC5):**
A simple example of using the [ReactJS.Net](http://reactjs.net/)
package to on-the-fly convert React JSX files to currently supported standards, e.g. ES5, JavaScript.
*(Note: Also available for ASP.NET Core, see [this NuGet package](https://www.nuget.org/packages/React.AspNet/)).*
2. **ReactWebPack** This is a more complex React application which is built using 
the [WebPack module bundler](https://webpack.github.io/) and [Babel Transpiler](http://babeljs.io/)
  - **[ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2)** 
is an ASP.NET Core (RC2) MVC version using [Redux](http://redux.js.org/) store.
  - **[ReactWebPack.MVC5](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.MVC5)** 
is a ASP.NET MVC5 version using the [Flux](https://facebook.github.io/flux/docs/overview.html) store.
3. **[ReactTests](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactTests)**:
A separate project containing a setup for running Unit Tests on React components and
libraries. 


## How to try the examples

If you clone/copy this GitHub Repository then you need to:

#### 1. Make sure your computer is set up properly

- I assume you are running Visual Studio 2015 (VS2015), which includes Node.js.  
*NOTE: You can use Visual Studio 2013 for the MVC5 versions, 
but I don't think the ASP.NET Core versions will work (I haven't tried it).*
- If you want to build the application that uses ASP.NET Core, R2 then you need to download and install
[Visual Studio official MSI Installer with Visual Studio tooling](https://www.microsoft.com/net/core#windows).

- I recommend you use [Visual Studio Code](https://code.visualstudio.com/) (VSCode)
to run the build/test React command scripts. You will need to:
  - Install VSCode 
  - Install [Node.js](https://nodejs.org/en/) if not already loaded.  
*Type `node --version` to check if nodejs is already installed.*
  - Install the the extension
[VSCode NPM Scripts](https://github.com/Microsoft/vscode-npm-scripts) extension.

- If you want to run the React command scripts from Visual Studio load the 
[NPM Task Runner](https://visualstudiogallery.msdn.microsoft.com/8f2f2cbc-4da5-43ba-9de2-c9d08ade4941)
extension through Tools -> Extensions and Updates -> Online -> search for NPM Task Runner.

#### 2. Set up the specific project

You should set the specific project you want to try as the startup application.
Simply right-click the project and select `Set as Startup Project`.  
*NOTE: No need to do that on the ReactTests application. That can't be run in that way anyway.*

If you want to run any of the MVC versions to see how it works 'out-of-the-box' then press F5 (Start Debugging).

*For [ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2) or
[ReactWebPack.MVC5](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.MVC5) 
it will run with the last build I did on that project's React code. 
[ReactJsNet.MVC5](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactJsNet.MVC5) 
transpiles on the fly anyway, so will always be up to date.*


#### 3. Running the React Build/Test commands

These sections apply to:
- [ReactTests](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactTests)
- [ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2)
- [ReactWebPack.MVC5](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.MVC5)

*NOTE: [ReactJsNet.MVC5](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactJsNet.MVC5)
doesn't need a build.*

If you want to run any of the build/test processes then you need to ensure the NPM packages are loaded
in that specific project. To do that load the solution into Visual Studio and
right-click the `packages.json` file in the project 
you are interested in. Then click `Restore Packages` at the top of the context menu.

*Note: If you restore all the packages and compile all the projects the solution takes up a LOT of disk space.*


##### 3a. React Build/Test with VSCode

VSCode  is a great way to handle the React code because it understands JSX and ES6 syntax. 
Its also very lightweight, i.e. it has a small memory footprint and is fast. 
Because the AspNetReactSamples solution has multiple package.json files  I have added some 
[user setting](https://github.com/JonPSmith/AspNetReactSamples/blob/master/.vscode/settings.json) 
to help the VSCode npm Scripts extension work with all of the projects. The process is:

1. Make sure you have VSCode setup properly - see [1. How to setup](https://github.com/JonPSmith/AspNetReactSamples#1-make-sure-your-computer-is-set-up-properly).
2. Open the outer directory of the samples, e.g. AspNetReactSamples, with VSCodes `Open Folder` command.
3. Type `F1` key, then `npm` and select `npm: Run Script` (shortcut: cntrl-R shift-R)
4. You are then presented with scripts from all three apps: `ReactTests`, `ReactWebPack.CoreRC2` and `ReactWebPack.MVC5`.
Pick the one you want, e.g. `ReactWebPack.CoreRC2: dev-build`.  
*NOTE: commands with `watch` in them stay running and will rebuild the files and 
re-run the command if a *.js file is saved. Very useful when debugging/developing.*
5. The output of the process is shown in a new console window, including any errors.  
*NOTE: To stop a `watch` task type cntrl-C in the console window.*

##### 3b. React Build/Test with Visual Studio

If you don't want to learn VSCode then you can run the React build/test commands from Visual Studio:

1. Make sure you have Visual Studio setup properly, especially that you have installed the
[NPM Task Runner](https://visualstudiogallery.msdn.microsoft.com/8f2f2cbc-4da5-43ba-9de2-c9d08ade4941)
extension - see 
[1. How to setup](https://github.com/JonPSmith/AspNetReactSamples#1-make-sure-your-computer-is-set-up-properly).
2. Open the Task Runner Explorer window (found via Views->Other Windows->Task Runner Explorer) 
select the package.json of the project you want to run commands for in the top dropdown
and then click the command you want to run. See example screenshot below:  
![Task Runner Window](https://raw.githubusercontent.com/JonPSmith/AspNetReactSamples/master/ReactNpmTaskRunnerWindow.PNG)  
The results will appear in the Task Runner Explorer output pane.   
*NOTE: commands with `watch` in them stay running and will rebuild the files and 
re-run the command if a *.js file is saved. Very useful when debugging/developing.*  

##### 4c. Notes about the Unit Tests

I have only written a few [Unit Tests](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactTests/Tests)
just to prove that my Test configuration/commands works.
See the article [Templates for building React front-ends in ASP.NET Core and MVC5](http://www.thereformedprogrammer.net/templates-for-building-react-front-ends-in-asp-net-core-and-mvc5/)
for more information on Unit Testing.


### NOTE: Making the application ready for production

While the React build process have totally valid development and production
paths I haven't handled all the ASP.NET side of production/deployment. 
Things that would need to be added:

- I have set up cachebuster values to ReactWebPack.CoreRC2 in production mode
but I haven't done anything in the ReactWebPack.MVC5 project. 
- I have changed the endings of the `vendor.js` and `main.js` to ...**min**.js
in ReactWebPack.CoreRC2, but not in ReactWebPack.MVC5.
- The ASP.NET Core Gulp command `min:js` in ReactWebPack.CoreRC2
must ignore the `vendor.js` and `main.js` development files. 
I haven't done that so the Gulp `min:js` command produces an incorrect file.
# AspNetReactSamples

Wecome to this ASP.NET solution which contains examples of how to incorporate, build and Unit Test 
[React](https://facebook.github.io/react/) front-end inside an ASP.NET Core (RC2) and ASP.NET MVC5 
application. 

**Licence: MIT**

### This solution is supported by the article [React Templates](http://www.thereformedprogrammer.net/templates-for-building-react-front-ends-in-asp-net-core-and-mvc5/) that goes through the examples in detail.

The example projects are designed to be scalable up to a real-world, production-ready applications
with full build, test, and deployment capabilities. 

### UPDATE: Two new article are out now, with the code updated:
#### 1. [Using Redux in React.js app](http://www.thereformedprogrammer.net/using-a-redux-store-in-your-react-js-application/)
This new article covers the changes made to the [ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2)
Kanban application to use the [Redux](http://redux.js.org/) store instead of the
[Flux](https://facebook.github.io/flux/docs/overview.html) store.

#### 2. [Adding mocking to React.js Unit Tests](http://www.thereformedprogrammer.net/adding-mocking-to-react-js-unit-tests/)
This is about improving the Unit Test to test some of the parts of the
[ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2)
application, which requires the mocking of the async 
[KanbanApi](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2/app/api)
module and handling the JavaScript promises that it uses.

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
*Note: This now contains the Unit Tests.*
3. ~~**[ReactTests](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactTests)**:
A separate project containing a setup for running Unit Tests on React components and
libraries.~~
*This was removed because having a separate project causes a problem of having 
[multiple copies of React](https://fb.me/react-refs-must-have-owner). Now found as part of 
[ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2).*

*NOTE: Due to existing links I am leaving the 
[ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2)
project at ASP.NET core 1.0.0-rc2-final. However I have built a similar React.js application using the existing setup,
i.e. `package.json` and `webpack.config.js` and, rest assured, it works just the same.* 


## How to try the examples

If you clone/copy this GitHub Repository then you need to:

#### 1. Make sure your computer is set up properly

- I assume you are running Visual Studio 2015 (VS2015), which includes a version of Node.js just for VS2015.  
*NOTE: You can use Visual Studio 2013 for the MVC5 versions, 
but I don't think the ASP.NET Core versions will work (I haven't tried it).*
- If you want to build the application that uses ASP.NET Core, R2 then you need to download and install
[Visual Studio official MSI Installer with Visual Studio tooling](https://www.microsoft.com/net/core#windows).

- I recommend you use [Visual Studio Code](https://code.visualstudio.com/) (VSCode)
to run the build/test React command scripts. You will need to:
  - Install VSCode 
  - Install proper [Node.js](https://nodejs.org/en/) if not already loaded.  
*Type `node --version` to check if nodejs is already installed.*
  - Install the the extension
[VSCode NPM Scripts](https://github.com/Microsoft/vscode-npm-scripts) extension.

- If you want to run the React command scripts from Visual Studio load the 
[NPM Task Runner](https://visualstudiogallery.msdn.microsoft.com/8f2f2cbc-4da5-43ba-9de2-c9d08ade4941)
extension through Tools -> Extensions and Updates -> Online -> search for NPM Task Runner.

#### 2. Set up the specific project

You should set the specific project you want to try as the startup application.
Simply right-click the project and select `Set as Startup Project`.  

If you want to run any of the MVC versions to see how it works 'out-of-the-box' then press F5 (Start Debugging).

*Note: [ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2) or
[ReactWebPack.MVC5](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.MVC5) 
it will run with the last build I did on that project's React code. 
[ReactJsNet.MVC5](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactJsNet.MVC5) 
transpiles on the fly anyway, so will always be up to date.*

*Note: In the ReactWebPack.CoreRC2 project VS2015 shows the message `- not installed` 
after the `Dependencies` folder and the `Dependencies\npm` folder. It seems this is a known issue:
see issue [NPM optional package installation failure #479](https://github.com/aspnet/Tooling/issues/479)
in aspnet/Tooling.*

#### 3. Running the React Build/Test commands

These sections apply to:
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

VSCode is a great way to handle the React code because it understands JSX and ES6 syntax. 
Its also very lightweight, i.e. it has a small memory footprint and is fast. 
Because the AspNetReactSamples solution has multiple package.json files  I have added some 
[user setting](https://github.com/JonPSmith/AspNetReactSamples/blob/master/.vscode/settings.json) 
to help the VSCode npm Scripts extension work with all of the projects. The process is:

1. Make sure you have VSCode setup properly - see [1. How to setup](https://github.com/JonPSmith/AspNetReactSamples#1-make-sure-your-computer-is-set-up-properly).
2. Open the outer directory of the samples, e.g. AspNetReactSamples, with VSCodes `Open Folder` command.
3. Type `F1` key, then `npm` and select `npm: Run Script` (shortcut: cntrl-R shift-R)
4. You are then presented with scripts from all two apps: `ReactWebPack.CoreRC2` and `ReactWebPack.MVC5`.
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

*NOTES: 
- commands with `watch` in them stay running and will rebuild the files and 
re-run the command if a *.js file is saved. Very useful when debugging/developing.
- I have sometimes found that Task Runner will only shows the `ReactWebPack.CoreRC2` Gulp commands.
I found out the NPM Task Runner tool was disabled (not sure why). If you can't see the build commands then check that 
it is enabled via Tools->Extensions and Updates->Installed and search for NPM.*  

##### 4c. Notes about the Unit Tests

I have now written quite a few Unit Tests and the way I set this up has changed. It used to be in a separate project,
but that caused a problem of [multiple copies of React](https://fb.me/react-refs-must-have-owner).
The Unit Tests are therefore now part of [ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2).

The key configuration files for Unit Testing are:

1. [karam.config.js](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.CoreRC2/karma.conf.js)
which holds all the info for the [Karam test runner](https://karma-runner.github.io/1.0/index.html).
2. [tests.webpack.js](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.CoreRC2/tests.webpack.js) 
which finds the unit tests to run.
3. [package.json](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.CoreRC2/package.json)
which holds all the libraries needed for Unit Testing, and the scripts to run the unit tests.

The Unit Tests can be found in the directory 
[JsUnitTests/Tests](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2/JsUnitTests/Tests).

See the article [Templates for building React front-ends in ASP.NET Core and MVC5](http://www.thereformedprogrammer.net/templates-for-building-react-front-ends-in-asp-net-core-and-mvc5/)
for more information on Unit Testing and the newer article
[Adding mocking to React.js Unit Tests](http://www.thereformedprogrammer.net/adding-mocking-to-react-js-unit-tests/) 
about mocking modules to improve testing.

## Using these templates to create your own React.js application

If you want to create your own ASP.NET application that runs a React.js application then 
it is fairly easy to copy a few files from these sample projects to add React.js 
build and run capabilites.

### 1. Using Webpack for building React.js applications

The two projects, [ReactWebPack.CoreRC2](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.CoreRC2) or
[ReactWebPack.MVC5](https://github.com/JonPSmith/AspNetReactSamples/tree/master/ReactWebPack.MVC5), contain four 
key files. You should pick the files for the specific 

1. **package.json: npm library files and scripts**
The `package.json` file holds all the libraries that you need to a) build and b) run the React.js application.
You need to decide what libraraies you want for your application, but the sample has a good starting point.
The [ASP.NET Core `package.json`](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.CoreRC2/package.json)
and [ASP.NET MVC5 `package.json`](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.MVC5/package.json)
are different, but only because they have different libraries. 
  - The ASP.NET Core `package.json`contains the various React.js Redux libraries and the normal Gulp
build automation tools that ASP.NET Core uses to productionise the JavaScript and CSS files.
  - The ASP.NET MVC5 `package.json` contains the React.js Flux store instead of Redux, as this implements the older style
of the Kanban application. By default MVC5 applciations do not included any Gulp or Grunt build automation tools in this.

2. **webpack.config.js: the file that controls the build of the React.js application**
This file controls how the React.js is transpiled and linked to form the two JavaScript files that contain
the built React.js application. The ASP.NET Core version and the ASP.NET MVC5 version are very similar,
which a few key differences which I will spell out below:  
The [ASP.NET Core `*webpack.config.js`](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.CoreRC2/webpack.config.js)
contains the follow lines especially for ASP.NET Core:
  - line 22: it refers to `wwwroot\js` directory, as that is where published files need to go.
  - line 24: if in production mode the files are minified so we make the ending `....min.js`. That stops Gulp from 
doing any more concatenating/minification on the files.  
The [ASP.NET MVC5 `*webpack.config.js`](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.MVC5/webpack.config.js)
contains the follow lines especially for ASP.NET MVC:
  - line 22: it puts the published files in the /js directory.
  - I don't add `...min.js` to the end of production produced files. It made it easier for testing, but you might want to do that.  
BOTH files look for the top level React.js file in the file `/app/App.js` (see line 18 in both files).
If you want to move/change the name of your top level React.js file then you need to adit this.

3. **The razor Index.cshtml and Layout .cshtml files**
To get the React.js application shown then you need to put it in MVC Views file,
with an appropriate layout file to load any associated libraries. The way you do this has changed 
between the ASP.NET MVC5 release and the newer ASP.NET Core release.
  - For the ASP.NET Core version look at [Home/Index.cshmtl](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.CoreRC2/Views/Home/Index.cshtml)
and the [Shared/_ReactLayout.cshtml](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.CoreRC2/Views/Shared/_ReactLayout.cshtml) files.
  - For the ASP.NER MVC5 version look at [Home/Index.cshmtl](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.MVC5/Views/Home/Index.cshtml)
and the [Shared/_ReactLayout.cshtml](https://github.com/JonPSmith/AspNetReactSamples/blob/master/ReactWebPack.MVC5/Views/Shared/_ReactLayout.cshtml) files.

4. **Unit Tests**
If you want to create Unit tests (of course you do!) then you need to add the unit test
configuration files, the npm test libraries & scripts and write the Unit Tests themselves. Have a look at the section 
[4c. Notes about the Unit Tests](https://github.com/JonPSmith/AspNetReactSamples#4c-notes-about-the-unit-tests) 
for more on this.


## NOTE: Making the application ready for production

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
Either delete the development files as part of the production stage or 
get Gulp to ignore those two files.
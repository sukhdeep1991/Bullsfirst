# Bullsfirst

Bullsfirst	is	a	mock	trading	application.

## Enhancements Done!

### Technical
- Move extrnal depencies to bower. Benefits -:
  - No need to upgrage the version of the dependency manually. It will be Automatically upgraded for minor version (like bug fixing or little enhancements
  - Source Code size will be less. So your repository size will be considerably less on Source control.
- FolderRestructure like moving JS, css and images to separate folders. Code readability. Can introduce a new folder src, thats all upto the debate which folder structure to choose.
- Rename AccountsController.js to accountsController.js, because I try to keep filenames in camelCase as well, just like javascript variables (unless they are classes).
- Devided the page into components. As this is a Single page application, so header will be common in all the pages, so created a reusable component header. Similarly, created two more components named accountsList and chart.
- Created accountsService, to provide accounts related data. Currently hardcoded, but later if need to replace with an API, can easily be done, without impacting the component/controller.
- Renamed rows to accounts for readability
- Calculation of total moved to service, making controller clean.
- Add account logic and refresh of total also moved to service.

### Functional
  - Add account not refreshign the total fixed.
  - Just like random marketValue and cash, legend color is also added randomly.
  - Made page almost identical to the given mockup. Can improve more if given time and proper icons for button etc.

## Further Enhancements
* Write unit test cases using Jasmine and Karma
* Improve UI to look exactly like the mockups
* Implement Sorting in the table and actual chart for the displayed data
* Implement Actions like select account from table and highlight in chart
* Responsive web design using frameworks like Bootstrap.

# Installation
## Prerequisites
 Please install following before running the application

* [NodeJS](https://nodejs.org/en/)
* [Grunt](https://gruntjs.com/)
```
npm install grunt-cli -g
```
* [Bower](https://bower.io/) 
```
npm install bower -g
```
## Steps
Please run following commands -:
```
npm install
bower install
grunt wiredep
npm start
```
A static server should be running on port 3000 (default).
Now you can open the Bullsfirst screen at following URL -:
[http://localhost:3000/index.html](http://localhost:3000/index.html)

## Authors
* [**Sukhdeep Singh**](https://www.linkedin.com/in/sukhdeep-singh-handa-b9712844/)

## Release Notes
* Version 1.1.0 - Code Changes for Exercise
* Version 1.0.1 - Initial app

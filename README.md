# InfluxtoExcel
1. Install Node.js on your computer.

2. Make a new directory for your work.
3. Initialise the project by the command: npm init
This will create a package.json file in which we can see our dependencies for the project.
4.  Install dependencies for our project: 

influxdb-client: for retrieving data from InfluxDB

exceljs: to create the excel workbook and add data

express: back end web application framework for Node.js

ejs: template engine for node.js and express, renders HTML and makes it possible to do conditions and access variables returns from the server

body-parser: to retrieve post request data from web server

To install these dependencies, run these commands one by one:

```
npm install --save @influxdata/influxdb-client
npm install exceljs
npm install express --save
npm install ejs
npm install body-parser
```

5. Copy the files to your computer, while editing the env.js file.
6. Explore on localhost:4000/download

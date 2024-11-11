# **Lab-Assignment#3 - Express Basics**

Overview

This project demonstrates the fundamental concepts of building web applications using the Express.js framework in Node.js. The assignment covers creating basic routes, handling HTTP requests (GET, POST, PUT, DELETE), and managing data with JSON files. The project also includes testing the API with Postman to simulate real-world usage.

The primary objective is to show the basics of CRUD (Create, Read, Update, Delete) operations with Express while interacting with a JSON file, using best practices in Express routing and middleware.

## Repo Code Files

This repo includes the following JavaScript files. 

- index1.js
- index2.js
- index3.js

## Installation and setting up
1. checking if node.js is installed by running this command:
   - node -v
2. Navigate to your project folder which is "Express-Basics" in our case, then use the "npm init" command to create a "package.json" file for your application.
   You can add -y to skip all the questions:
   - `npm init -y`
3. Now istalling express using
   - `npm i express`
4. installing nodemon using
   - `npm install nodemon --save-dev`
5. Modify package.json
   update the package.json file to include a start script usign Nodemon. This will allow the automatic restart of the server, and also support for JSON modules:
   - `"start":"nodemon --experimental-json-modules"`
6. Creating 3 javascript files as mentioned in the instructions
   - index1.js: This file will include the full Express boilerplate and will create a route that displays your group names using HTML elements on the homepage (/).
   - index2.js: This file will display JSON data when accessed through a specific route (e.g., /data), as required.
   - index3.js: This file will implement the four Express methods (CRUD operations).
8. Running the files: Start the server using the following command:
   - `npm start`
   
    This will run the project with Nodemon, automatically restarting the server when any           changes   are detected in the code.
9. using ES6 modules by adding "type":"module" in package.json.

## API routes and CRUD operations

1. Post: Add a new item.
2. Get: get the list of items.
3. Put: Update an existing item.
4. Delete: Delete an item.

## Testing the API with Postman
For testing, open Postman and use the routes outlined above to send requests. Here's is how to do it:
1. Testing POST:Add a JSON object in the request body to create a new entry.
2. Testing GET: Simply enter the URL and view the returned JSON data.
3. Testing PUT: Use a JSON object with the updated data and specify the id of the item to update.
4. Testing DELETE: Enter the id in the URL to remove an item.
Then captured screenshots of successful responses in Postman for each opering.

## Conclusion 
This assignment demonstrates the basics of building a RESTful API with Express.js in Node.js, focusing on the core CRUD (Create, Read, Update, Delete) operations. Through this project, we learned how to set up a Node.js environment, create and manage routes in Express, handle JSON data, and use Postman for API testing.

By completing these tasks, we gained practical experience with fundamental web development skills, including:
- Structuring a server application with Express boilerplate code.
- Setting up endpoints for CRUD operations to interact with data stored in JSON files.
- Utilizing Nodemon for streamlined development with automatic restarts on file changes.
- Exploring ES6 modules to enable modern JavaScript syntax.

These skills provide a foundation for building and expanding web applications in future projects. Through this hands-on practice, we better understand server-side programming and RESTful API development, which are essential for backend development in modern web applications.

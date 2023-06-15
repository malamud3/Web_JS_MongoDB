# Full-Stack App 

## Back-End

The back-end of the application provides API routes to perform CRUD operations on a collection of sites stored in a MongoDB database. 
It uses Mongoose as the MongoDB object modeling tool.

### API Routes

#### The back-end defines the following API routes:

##### Get all sites

Route: GET /sites/
Description: Retrieves all sites from the database.
Response: Returns a JSON array containing all the sites.

##### Get a single site

Route: GET /sites/:id
Description: Retrieves a specific site based on the provided site ID.
Response: Returns a JSON object representing the site.

##### Create a new site

Route: POST /sites/
Description: Creates a new site in the database.
Request Body: Expects a JSON object with the following properties:
name (required): The name of the site.
siteDescription (required): A description of the site.
imageUrl (required): The URL of the site's image.
Response: Returns a JSON object representing the newly created site.

##### Update a site

Route: PATCH /sites/:id
Description: Updates a specific site based on the provided site ID.
Request Body: Expects a JSON object with the following optional properties:
name: The new name of the site.
siteDescription: The new description of the site.
Response: Returns a JSON object representing the updated site.

##### Delete a site

Route: DELETE /sites/:id
Description: Deletes a specific site based on the provided site ID.
Response: Returns a JSON object with a success message.

### Middleware

## The back-end also includes a middleware function to handle common functionality:

Function: Middleware function to retrieve a specific site based on the provided site ID.
Usage: Used as middleware for routes that require accessing a specific site.
Input: Expects a valid site ID as a route parameter.
Output: Sets the retrieved site as a property on the response object (res.site).

## Front-End

The front-end of the application is built using EJS templates for rendering dynamic web pages. It includes a layout file (layots/layout.ejs) and uses Express.js and the express-ejs-layouts package for template rendering.


### Prerequisites

Before running the application, ensure that you have the following:

Node.js installed on your machine
MongoDB database connection URI
Getting Started

### To set up and run the application, follow these steps:

Clone the repository: git clone <repository-url>
Install the dependencies: npm install
Create a .env file in the root directory and add the following environment variables:
makefile
Copy code
PORT=<port-number>
MONGODB_URI=<mongodb-connection-uri>
Replace <port-number> with the desired port number for the application and <mongodb-connection-uri> with the URI of your MongoDB database.
Start the application: npm start
Open a web browser and navigate to http://localhost:<port-number> to access the application.
Contributing


### License

This project is licensed under the MIT License.

### Acknowledgments

Express.js
EJS
Mongoose
Express
jQuery
Bootstrap
dotenv

# Welcome to Animal Sighting Tracker! 

I made this project to demonstrate the skils of buildings a full stack application. This project highlights the use of join queries to return information from multiple tables to the front end. 

## Project Objective:

This project utilizes a backend server, created with Express.js. Making calls to an API, displaying the data to the frontend.

## Technologies used

React 
Express.js
Node.js
PostgreSQL
VSCode 
Tailwind CSS

## Installation Instructions

2. Clone this repository.
3. Open the cloned repository in a code editor.


### Environment setup: 

cd server and run 

`````````
npm install
`````````

cd client and run 

`````````
npm install
`````````

### PostgreSQL setup: 
In your terminal log-in to PostgreSQL 
1. create a database called wyldlife 

`````````
CREATE DATABASE wyldlife 
`````````
2. to find your username and host enter 
`````````
\conninfo
`````````


### Database setup: 
At the path server/sample.env
1. copy the database information from sample.env 
2. create a new .env file and paste the information from the sample there 
3. enter your own database information into this file


### How to run:

Creating database tables 
1. cd into the folder server 
2. run the following command in your terminal at the server folder level to create the project database tables 

`````````
psql -U your_user -d your_database -f dumpfile.sql
`````````

For Backend
1. cd into the folder server  
2. In the terminal type ````````` node server.js`````````

To confirm the backend is connection navigate to the URL 
`````````localhost:3000`````````

To confirm the databases are connected navigate to the URL to check the different tables 

`````````localhost:3000/species`````````

`````````localhost:3000/individuals`````````

`````````localhost:3000/sightings`````````

For Frontend
1. cd into the folder client
2. In the terminal type ````````` npm run dev `````````


## Future Implementation: 
- [ ] Review backend queries to ensure dynamic querying 
- [ ] Reformat front end to utilize Context API 
- [ ] Improve CSS display
- [ ] Complete testing for components



## Project Preview: 



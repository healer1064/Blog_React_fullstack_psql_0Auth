# react-redux-fullstack-blog

This Project was bootstrapped with create-react-app

download or git clone the project files.

## cd into both Project Directories in 2 different terminal windows and then install dependencies

The "Client" directory contains the react code. The "Server" directory contains the code for the node.js express server. This project also requries a PSQL database to run. 


#### 1st window
`cd Client`

#### 2nd window
`cd Server`

#### 1st window
`npm install` 

#### 2nd window
`npm install` 

### Run both the server and client at the same time

#### 1st window 
`npm start`
(runs react at localhost:3000)

#### 2nd window 
`npm run devstart` 
(devstart runs nodemon at localhost:5000)


### Open the PSQL shell and login to PSQL
Create a new PSQL database if you have not already done so. 
Simply copy the SQL code in the Server/schema.sql file. 


After setting up the PSQL database the app will be fully functional. See the accompanying tutorial linked above for more details. 

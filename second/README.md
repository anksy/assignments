Below you will find some information on how to perform common tasks.<br>
## Install dependencies

Once you'e checked out the code, go to the project folder and run command **npm install**.

## ENV config

Make sure you've .env file at root of the directory. In that you must define the environment var *NODE_ENV=development*, Since this is for testing purpose so we have only one env available which is development.

You can also configure the env file by editing **./app/config/env/development.js**. Make necessary edits here.

## Running Node Server

Once you've installed all the dependencies and env is up, simply run the server by command **node server**. It will up the server and allow you to navigate the sample app at http://localhost:4000


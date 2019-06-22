# React list Apps 

this is an Itunes Apps listing application , 
you can do the following : 
  - list all paid apps 
  - search Apps
  - view a specific app's details


### How To Use It :

In package.json : 

| script | Job |
| -------------------- | ------ |
| hotload-api | loads the api and watches for changes 'make sure u have nodemone installed'
| start | prepares the dev build and starts the node server 'no hot reload'
| dev-server | loads the front-end ONLY , no interaction withthe api|
| dev_api | loads the front-end and the backend and watches for changes on both 'this might through Error: listen EADDRINUSE :::3000 sometime but it won't block the processes' CURRENTLY UNSTABLE|
| build:dev | prepares a build bundle.js file
| build:dev | prepares a bundle.js.map file for deployment
| heroku-postbuild | used by Heroku to build the app upon deployment

1- `git clone` the repo

2- `cd` to `PaidApps` 

3- run `npm install` to install the `node_modules` NOTE: you might get an error `node-sass not found` please install it separately 

4- run `npm run start` to start the server, this will prepare the build of the front end and serve you the app on `http://localhost:3000/` 

### alternitavely : 


###### if you want to load only the front-end 'no Data will load' : 

5- run `npm run dev-server` 

###### if you want to make a development build , run it on "express"(the backend) : 

6- run `npm run build:dev` and then `npm run hotload-api` or `npm run start` 

###### if you want to make a deployment build : 

7- run `npm run build:prod` 

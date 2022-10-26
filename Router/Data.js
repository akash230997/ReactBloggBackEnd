const express = require('express');

//importing data present in controller
const storeData = require('../Controller/data');

// connecting all the routes by express.Router();
const myRouter = express.Router();

//creating route and importing data.js and fetching information from controller
myRouter.route('/fetchData').get(storeData.dataController);

module.exports = myRouter;




// const express = require('express');

// const data = require('../Controller/Data');

// const Router = express.Router();

// Router.route('/api').get(data.control);
// module.exports = Router;

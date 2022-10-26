const express = require('express');

const apidata = require('../Controller/Data');

const MyRouter = express.Router();

MyRouter.route('/api').get(apidata.control);
module.exports = MyRouter;

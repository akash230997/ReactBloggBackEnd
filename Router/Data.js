const express = require('express');

const data = require('../Controller/Data');

const Router = express.Router();

Router.route('/api').get(data.control);
module.exports = Router;

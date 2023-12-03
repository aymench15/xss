const {Router} = require('express');
const route = Router();
const search_controller = require('../controller/search_controller');
const multer = require('multer')


route.get('/home',search_controller.getHome);
route.get('/search',search_controller.getSearch);
route.post('/search',search_controller.postSearch);
module.exports = route; 
const express = require('express');
const routes = express.Router();
const data = require('../data');

routes.get('/', (req, res) => {
  let collect = data.get().collection('robotregistry');

    collect.find({}).toArray((err, mainRoutes) => {
    res.render('home', {mainRoutes: mainRoutes});
  });
});

routes.get('/:search', (req, res) =>{
  let collection = data.get().collection('robotregistry');

  collection.findOne({username: req.params.search}, (err, mainRoutes) => {
    res.render('profile', {mainRoutes:mainRoutes});
  });
});

module.exports = routes;

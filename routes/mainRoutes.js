const express = require('express');
const routes = express.Router();
const data = require('../data');

routes.get('/', (req, res) => {
  let collect = data.get().collection('robotregistry');

    collect.find({}).toArray((err, mainRoutes) => {
    res.render('home', {mainRoutes: mainRoutes});
  });
});

routes.get('/employed', (req, res) => {
  let collect = data.get().collection('robotregistry');

    collect.find({company:{$ne: null}}).toArray((err, mainRoutes) => {
    res.render('employed', {mainRoutes: mainRoutes});
  });
});

routes.get('/looking', (req, res) => {
  let collect = data.get().collection('robotregistry');
    collect.find({company: null}).toArray((err, mainRoutes) => {
    res.render('looking', {mainRoutes: mainRoutes});
  });
});

routes.get('/:search', (req, res) =>{
  let collection = data.get().collection('robotregistry');

  collection.findOne({username: req.params.search}, (err, mainRoutes) => {
    res.render('profile', {mainRoutes:mainRoutes});
  });
});





module.exports = routes;

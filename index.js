const express = require('express');
const data = require('./data')
const handlebars = require('express-handlebars')
const routers = require('./routes/mainRoutes')
const app = express();

const url = 'mongodb://localhost:27017/robotregistry';

app.engine('handlebars', handlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/', routers);

data.connect(url, (err,connection)=>{
  if (!err)
    app.listen("3000", function(){
      console.log("app started");

    })


});

'user strict';
const express = require('express');
var Ddos = require('ddos');
const bodyParser = require('body-parser');
const ports = require('./common/config.json');

var ddos = new Ddos({ burst: 10, limit: 15 })
const app = express();
const port = process.env.PORT || ports.port;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type,Accept, Authorization, X-Requested-With");
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT,PATCH');
      return res.status(200).json({});
    }
    next();
  });

  // middle wares
app.use(bodyParser.json());
app.use(ddos.express);

// controller 
const teacherController = require('./controller/teacherController');


// model

app.use('/api/employee', teacherController);


app.listen(port, () => {
    console.log('API server started on: ' + port);
  });
  
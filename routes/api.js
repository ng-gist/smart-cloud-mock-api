const express = require('express');
const router = express.Router();
const _ = require('lodash');

/* GET users listing. */
router.get('/dataPie', function(req, res) {
  const jsonData = [{
    key: 'Germany',
    value: _.random(1, 100, false)
  }, {
    key: 'Russia',
    value: _.random(1, 100, false)
  }, {
    key: 'USA',
    value: _.random(1, 100, false)
  }, {
    key: 'Europe',
    value: _.random(1, 100, false)
  }];

  setTimeout(() => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Request-Method', '*');
      res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.send(jsonData);
  }, 200);
});

router.get('/smart-start/union', function(req, res) {
  const jsonData = [{
    key: 'Union',
    value: _.random(200, 300, false)
  }, {
    key: 'Non-Union',
    value: _.random(10, 50, false)
  }, {
    key: 'Non-Affiliate',
    value: _.random(1, 100, false)
  }];

  setTimeout(() => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Request-Method', '*');
      res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.send(jsonData);
  }, 200);
});

module.exports = router;

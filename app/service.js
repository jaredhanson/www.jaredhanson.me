exports = module.exports = function(aim, logging) {
  var express = require('express');
  var path = require('path');
  
  
  var service = express();
  service.use(logging());
  
  service.get('/presence/aim', aim);
  
  
  service.use(express.static(path.join(__dirname, '../www')));
    
  return service;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  './handlers/presence/aim',
  'http://i.bixbyjs.org/http/middleware/logging'
];

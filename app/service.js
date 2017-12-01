exports = module.exports = function(aim, logging) {
  var express = require('express');
  
  
  var service = express();
  service.use(logging());
  
  service.get('/presence/aim', aim);
    
  return service;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  './handlers/presence/aim',
  'http://i.bixbyjs.org/http/middleware/logging'
];

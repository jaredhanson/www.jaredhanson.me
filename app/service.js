exports = module.exports = function(aim, pubsub, trackbackService, logging) {
  var express = require('express');
  var path = require('path');
  
  
  var service = express();
  service.use(logging());
  
  service.get('/presence/aim', aim);
  
  
  service.post('/pubsub/push', pubsub);
  
  service.use('/trackback', trackbackService)
  
  
  service.use(express.static(path.join(__dirname, '../www')));
    
  return service;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  './handlers/presence/aim',
  './handlers/pubsub',
  'http://schemas.modulate.io/js/http/TrackBackService',
  'http://i.bixbyjs.org/http/middleware/logging'
];

exports = module.exports = function(aim, pushDeliveryService, trackbackService, logging) {
  var express = require('express');
  var path = require('path');
  
  
  var service = express();
  service.use(logging());
  
  service.get('/presence/aim', aim);
  
  
  service.use('/pubsub/push', pushDeliveryService);
  
  service.use('/trackback', trackbackService)
  
  
  service.use(express.static(path.join(__dirname, '../www')));
    
  return service;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  './handlers/presence/aim',
  'http://schemas.modulate.io/js/cloud/gcp/pubsub/HTTPPushDeliveryService',
  'http://schemas.modulate.io/js/social/notifications/trackback/HTTPService',
  'http://i.bixbyjs.org/http/middleware/logging'
];

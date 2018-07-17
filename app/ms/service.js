exports = module.exports = function(linkback, logging) {
  var crane = require('crane');
  
  
  var service = crane();
  //service.use(logging());
  
  service.work('test-linkback', linkback);
    
  return service;
};

//exports['@implements'] = 'http://i.bixbyjs.org/ms/Application';
exports['@require'] = [
  './handlers/linkback'
];

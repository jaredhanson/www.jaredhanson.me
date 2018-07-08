exports = module.exports = function(parse) {
  
  
  function respond(req, res, next) {
    console.log('Google Cloud PubSub Push');
    console.log(req.body);
    
    res.status(200).send();
  }
  
  return [
    parse('application/json'),
    respond
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/parse'
];

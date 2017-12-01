// https://web.archive.org/web/20060408125322/http://developer.aim.com:80/faq.jsp#presence

exports = module.exports = function() {
  var uri = require('url');
  var request = require('request');
  var XML = require('xtraverse');
  
  
  var URL = 'http://api.oscar.aol.com/presence/get';
  
  function respond(req, res, next) {
    var url = uri.parse(URL);
    console.log(url);
    url.query = {};
    url.query.k = process.env['AIM_KEY'];
    url.query.f = 'xml';
    url.query.t = process.env['AIM_SCREENNAME'];
    
    
    url = uri.format(url);
    
    request.get(url, function (err, resp, body) {
      console.log('GOT IT!');
      console.log(err)
      if (resp) {
        console.log(resp.statusCode)
        console.log(resp.headers);
      }
      console.log(body);
      
      var xml = XML(body)
        , pres = {};
      
      var user = xml.children('data').children('users').children('user').first();
      var state = user.children('state').text();
      switch (state) {
      case 'offline':
        pres.show = 'offline';
        break;
      case 'online':
        pres.show = 'available';
        break;
      case 'away':
        pres.show = 'away';
        break;
      }
      res.json(pres);
    });
  }
  
  return [ respond ];
};

exports['@require'] = [];

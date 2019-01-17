exports = module.exports = function(blog, sitemap, robotsProtocol, cname) {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.engine('pug', require('pug'));
  
  site.set('base url', 'http://www.jaredhanson.me');
  site.set('layout engine', 'pug');
  site.locals.pretty = true;

  site.content('content');
  site.use('/blog', blog);

  site.use(sitemap);
  site.use(robotsProtocol);
  
  return site;
};

exports['@require'] = [
  'http://i.kerouacjs.org/blog/Site',
  'http://i.kerouacjs.org/www/sitemap/Site',
  'org.kerouacjs/robots/protocol'
];

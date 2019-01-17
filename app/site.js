exports = module.exports = function(blog, sitemapProtocol, robotsProtocol) {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.engine('pug', require('pug'));
  
  site.set('base url', 'http://www.jaredhanson.me');
  site.set('layout engine', 'pug');
  site.locals.pretty = true;

  site.content('content');
  site.use('/blog', blog);

  site.use(sitemapProtocol);
  site.use(robotsProtocol);
  
  return site;
};

exports['@require'] = [
  'http://i.kerouacjs.org/blog/Site',
  'org.kerouacjs/sitemap/protocol',
  'org.kerouacjs/robots/protocol'
];

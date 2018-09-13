exports = module.exports = function(sitemap, robots, cname) {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.engine('pug', require('pug'));
  
  site.set('base url', 'http://www.jaredhanson.me');
  site.set('layout engine', 'pug');
  site.locals.pretty = true;

  site.content('content');
  site.use('/blog', require('kerouac-blog')({ layout: 'blog' }));

  site.use(sitemap);
  site.use(robots);
  
  return site;
};

exports['@require'] = [
  'http://i.kerouacjs.org/www/sitemap/Site',
  'http://i.kerouacjs.org/www/robots/Site'
];

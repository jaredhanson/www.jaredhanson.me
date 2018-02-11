require('dotenv').load();

var kerouac = require('kerouac');
var site = kerouac();

site.set('base url', 'http://www.jaredhanson.me');
site.set('layout engine', 'pug');

site.locals.pretty = true;


site.engine('pug', require('pug'));

site.content('content');

site.generate(function(err) {
  console.log('DONE!');
  if (err) {
    console.error(err.message);
    console.error(err.stack);
    return;
  }
});

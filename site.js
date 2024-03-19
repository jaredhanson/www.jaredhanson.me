var kerouac = require('kerouac');
kerouac.blog = require('kerouac-blog');

var site = kerouac();
site.set('base url', 'https://www.jaredhanson.me');

var blog = new kerouac.blog.Blog();

site.page('/index.html', require('./handlers/home')());
site.use('/', kerouac.blog(blog));
site.use(kerouac.content('content'));
site.use(require('kerouac-robotstxt')());
site.use(kerouac.assets('assets'));


site.generate({
  '/': [
    //kerouac.content.createMapper(),
    kerouac.assets.createMapper(),
    //kerouac.assets.createMapper(),
    kerouac.blog.createMapper(blog),
    require('kerouac-robotstxt').createMapper()
  ]
  },
  function(err) {
    console.log('DONE!');
    if (err) {
      console.error(err.message);
      console.error(err.stack);
      return;
    }
  });

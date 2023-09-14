var kerouac = require('kerouac');
kerouac.blog = require('kerouac-blog');

var site = kerouac();
site.set('output', 'public');

var blog = new kerouac.blog.FSBlog();

site.use('/', kerouac.blog(blog));
site.page('/index.html', require('./handlers/home')(blog));
site.use(kerouac.content('content'));


site.generate({
  '/': [
    kerouac.content.createMapper(),
    //kerouac.assets.createMapper(),
    kerouac.blog.createMapper(blog),
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
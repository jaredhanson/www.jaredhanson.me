var kerouac = require('kerouac');
var blog = require('kerouac-blog');

var site = kerouac();
site.set('output', 'public');
//site.engine('pug', require('pug'));

site.use('/blog', blog());
site.use(kerouac.content('content'));


site.generate({
  '/': [
    kerouac.content.createMapper(),
    //kerouac.assets.createMapper()
  ],
  '/blog': blog.createMapper(),
  },
  function(err) {
    console.log('DONE!');
    if (err) {
      console.error(err.message);
      console.error(err.stack);
      return;
    }
  });

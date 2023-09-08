var kerouac = require('kerouac');

var site = kerouac();
site.set('output', 'public');
//site.engine('pug', require('pug'));

site.use(kerouac.content('content'));


site.generate({
  '/': [
    kerouac.content.createMapper(),
    //kerouac.assets.createMapper()
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

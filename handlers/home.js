exports = module.exports = function(blog) {
  
  function fetchArticles(page, next) {
    blog.entries(function(err, articles) {
      if (err) { return next(err); }
      
      console.log(articles);
      next();
    });
  }
  
  function fetchResume(page, next) {
    page.locals.resume = [ {
      company: 'Auth0',
      title: 'Chief Architect',
      logo: 'images/auth0.svg',
      start: '2105',
      end: '2019',
    } ];
  }
  
  function render(page, next) {
    page.locals.title = 'Jared Hanson';
    page.render('home');
  }
  
  return [
    fetchArticles,
    fetchResume,
    render
  ]
  
};


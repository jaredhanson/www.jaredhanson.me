exports = module.exports = function() {
  
  function fetchResume(page, next) {
    page.locals.resume = [ {
      company: 'Okta',
      title: 'Principal Product Architect',
      //logo: 'images/OKTA.svg', // https://companieslogo.com/okta/logo/
      logo: 'images/aspera_logo.svg',
      start: '2019',
      end: 'Present',
    }, {
      company: 'Auth0',
      title: 'Chief Architect',
      logo: 'images/4691528_auth0_icon.svg', // https://www.iconfinder.com/icons/4691528/auth0_icon
      start: '2105',
      end: '2019',
    } ];
    page.locals.resume = [];
    next();
  }
  
  function blog(page, next) {
    page.layout = 'home';
    page.locals.title = 'Jared Hanson';
    next('route');
  }
  
  return [
    fetchResume,
    blog
  ]
  
};


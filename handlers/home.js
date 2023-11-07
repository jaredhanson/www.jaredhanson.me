exports = module.exports = function() {
  
  function fetchResume(page, next) {
    page.locals.resume = [ {
      company: 'Okta',
      title: 'Principal Product Architect',
      logo: 'images/okta.png',
      start: '2019',
      end: 'Present',
    }, {
      company: 'Auth0',
      title: 'Chief Architect',
      logo: 'images/auth0.png',
      start: '2015',
      end: '2019',
    }, {
      company: 'NodePrime',
      title: 'Software Engineer',
      logo: 'images/nodeprime.png',
      start: '2013',
      end: '2015',
      black_background: true
    }, {
      company: 'Sifteo',
      title: 'Software Developer',
      logo: 'images/sifteo.png',
      start: '2011',
      end: '2013'
    }, {
      company: 'Aspera',
      title: 'Software Engineer',
      logo: 'images/aspera.png', // https://www.iconfinder.com/icons/4691528/auth0_icon
      start: '2005',
      end: '2011',
    }, {
      company: 'Innovative Systems',
      title: 'Software Engineer',
      logo: 'images/innovative-systems.png', // https://www.iconfinder.com/icons/4691528/auth0_icon
      start: '2003',
      end: '2005',
    } ];
    //page.locals.resume = [];
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


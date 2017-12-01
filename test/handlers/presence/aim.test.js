var $require = require('proxyquire');
var chai = require('chai');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../app/handlers/presence/aim');


describe('handlers/presence/aim', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  describe('handler', function() {
    
    describe('online in JSON', function() {
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            date: 'Fri, 01 Dec 2017 01:23:31 GMT',
            pragma: 'no-cache',
            'cache-control': 'no-store,no-cache,must-revalidate',
            'content-type': 'application/json;charset=UTF-8'
          }
        },
'{"response":{"statusCode":200, "statusText":"Ok", "data":{"users":[{"aimId":"johndoe@mac.com", "displayId":"johndoe@mac.com", "friendly":"John Doe", "state":"online", "onlineTime":7897, "maxIMSize":3987, "invisible":0, "userType":"aim", "buddyIcon":"http://o.aimcdn.net/e/1/0000xxx000x00x0x000xxx000x000xxxx0x0", "presenceIcon":"http://o.aolcdn.com/aim/img/online.gif", "gOTR":0, "offTheRecord":0}]}}}'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'available' });
      });
    
    }); // online in JSON
    
    describe('online in XML', function() {
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            date: 'Fri, 01 Dec 2017 01:21:06 GMT',
            pragma: 'no-cache',
            'cache-control': 'no-store,no-cache,must-revalidate',
            'content-type': 'text/xml;charset=UTF-8'
          }
        },
'<?xml version="1.0" encoding="UTF-8"?>' +
'<response xmlns="http://developer.aim.com/xsd/presence.xsd"><statusCode>200</statusCode><statusText>Ok</statusText><data><users><user><aimId>johndoe@mac.com</aimId><displayId>johndoe@mac.com</displayId><friendly>John Doe</friendly><state>online</state><onlineTime>7752</onlineTime><maxIMSize>3987</maxIMSize><invisible>0</invisible><userType>aim</userType><buddyIcon>http://o.aimcdn.net/e/1/0000xxx000x00x0x000xxx000x000xxxx0x0</buddyIcon><presenceIcon>http://o.aolcdn.com/aim/img/online.gif</presenceIcon><gOTR>0</gOTR><offTheRecord>0</offTheRecord></user></users></data></response>'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'available' });
      });
    
    }); // online in XML
    
    
    describe('away in JSON', function() {
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            date: 'Fri, 01 Dec 2017 01:02:09 GMT',
            pragma: 'no-cache',
            'cache-control': 'no-store,no-cache,must-revalidate',
            'content-type': 'application/json;charset=UTF-8'
          }
        },
'{"response":{"statusCode":200, "statusText":"Ok", "data":{"users":[{"aimId":"johndoe@mac.com", "displayId":"johndoe@mac.com", "friendly":"John Doe", "state":"away", "onlineTime":6615, "maxIMSize":3987, "idleTime":97, "awayTime":5235, "invisible":0, "userType":"aim", "buddyIcon":"http://o.aimcdn.net/e/1/0000xxx000x00x0x000xxx000x000xxxx0x0", "presenceIcon":"http://o.aolcdn.com/aim/img/away.gif", "gOTR":0, "offTheRecord":0}]}}}'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'away' });
      });
    
    }); // away in JSON
    
    describe('away in XML', function() {
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            date: 'Fri, 01 Dec 2017 00:55:11 GMT',
            pragma: 'no-cache',
            'cache-control': 'no-store,no-cache,must-revalidate',
            'content-type': 'text/xml;charset=UTF-8'
          }
        },
'<?xml version="1.0" encoding="UTF-8"?>\n' +
'<response xmlns="http://developer.aim.com/xsd/presence.xsd"><statusCode>200</statusCode><statusText>Ok</statusText><data><users><user><aimId>johndoe@mac.com</aimId><displayId>johndoe@mac.com</displayId><friendly>John Doe</friendly><state>away</state><onlineTime>6197</onlineTime><maxIMSize>3987</maxIMSize><idleTime>90</idleTime><awayTime>4817</awayTime><invisible>0</invisible><userType>aim</userType><buddyIcon>http://o.aimcdn.net/e/1/0000xxx000x00x0x000xxx000x000xxxx0x0</buddyIcon><presenceIcon>http://o.aolcdn.com/aim/img/away.gif</presenceIcon><gOTR>0</gOTR><offTheRecord>0</offTheRecord></user></users></data></response>'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'away' });
      });
    
    }); // away in XML
    
    describe('away no idle in XML', function() {
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            date: 'Fri, 01 Dec 2017 00:55:11 GMT',
            pragma: 'no-cache',
            'cache-control': 'no-store,no-cache,must-revalidate',
            'content-type': 'text/xml;charset=UTF-8'
          }
        },
'<?xml version="1.0" encoding="UTF-8"?>\n' +
'<response xmlns="http://developer.aim.com/xsd/presence.xsd"><statusCode>200</statusCode><statusText>Ok</statusText><data><users><user><aimId>johndoe@mac.com</aimId><displayId>johndoe@mac.com</displayId><friendly>John Doe</friendly><state>away</state><onlineTime>1494</onlineTime><maxIMSize>3987</maxIMSize><awayTime>416</awayTime><invisible>0</invisible><userType>aim</userType><buddyIcon>http://o.aimcdn.net/e/1/0110efa251f23b7e754cdc853f498ccef4a1</buddyIcon><presenceIcon>http://o.aolcdn.com/aim/img/away.gif</presenceIcon><gOTR>0</gOTR><offTheRecord>0</offTheRecord></user></users></data></response>'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'away' });
      });
    
    }); // away in XML
    
    
    describe('offline in JSON', function() {
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            date: 'Fri, 01 Dec 2017 01:14:06 GMT',
            pragma: 'no-cache',
            'cache-control': 'no-store,no-cache,must-revalidate',
            'content-type': 'application/json;charset=UTF-8'
          }
        },
'{"response":{"statusCode":200, "statusText":"Ok", "data":{"users":[{"aimId":"johndoe@mac.com", "displayId":"johndoe@mac.com", "friendly":"John Doe", "state":"offline", "maxIMSize":3987, "invisible":0, "userType":"aim", "buddyIcon":"http://o.aimcdn.net/e/1/0110efa251f23b7e754cdc853f498ccef4a1", "presenceIcon":"http://o.aolcdn.com/aim/img/offline.gif", "gOTR":0, "offTheRecord":0}]}}}'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'offline' });
      });
    
    }); // offlien in JSON
    
    describe('offline in XML', function() {
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            date: 'Fri, 01 Dec 2017 01:28:30 GMT',
            pragma: 'no-cache',
            'cache-control': 'no-store,no-cache,must-revalidate',
            'content-type': 'text/xml;charset=UTF-8'
          }
        },
'<?xml version="1.0" encoding="UTF-8"?>\n' +
'<response xmlns="http://developer.aim.com/xsd/presence.xsd"><statusCode>200</statusCode><statusText>Ok</statusText><data><users><user><aimId>johndoe@mac.com</aimId><displayId>johndoe@mac.com</displayId><friendly>John Doe</friendly><state>offline</state><maxIMSize>3987</maxIMSize><invisible>0</invisible><userType>aim</userType><buddyIcon>http://o.aimcdn.net/e/1/0110efa251f23b7e754cdc853f498ccef4a1</buddyIcon><presenceIcon>http://o.aolcdn.com/aim/img/offline.gif</presenceIcon><gOTR>0</gOTR><offTheRecord>0</offTheRecord></user></users></data></response>'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'offline' });
      });
    
    }); // offline in XML
    
    describe('mobile in JSON', function() {
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            date: 'Fri, 01 Dec 2017 01:14:06 GMT',
            pragma: 'no-cache',
            'cache-control': 'no-store,no-cache,must-revalidate',
            'content-type': 'application/json;charset=UTF-8'
          }
        },
'{"response":{"statusCode":200, "statusText":"Ok", "data":{"users":[{"aimId":"johndoe1999", "displayId":"johndoe1999", "state":"mobile", "onlineTime":0, "maxIMSize":129, "invisible":0, "userType":"aim", "presenceIcon":"http://o.aolcdn.com/aim/img/mobile.gif", "gOTR":0, "offTheRecord":0, "smsSegment":{"single":129, "initial":121, "trailing":121}}]}}}'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({});
      });
    
    }); // mobile in JSON
    
    describe('mobile in XML', function() {
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            date: 'Fri, 01 Dec 2017 01:09:21 GMT',
            pragma: 'no-cache',
            'cache-control': 'no-store,no-cache,must-revalidate',
            'content-type': 'text/xml;charset=UTF-8'
          }
        },
'<?xml version="1.0" encoding="UTF-8"?>\n' +
'<response xmlns="http://developer.aim.com/xsd/presence.xsd"><statusCode>200</statusCode><statusText>Ok</statusText><data><users><user><aimId>johndoe1999</aimId><displayId>johndoe1999</displayId><state>mobile</state><onlineTime>0</onlineTime><maxIMSize>129</maxIMSize><invisible>0</invisible><userType>aim</userType><presenceIcon>http://o.aolcdn.com/aim/img/mobile.gif</presenceIcon><gOTR>0</gOTR><offTheRecord>0</offTheRecord><smsSegment><single>129</single><initial>121</initial><trailing>121</trailing></smsSegment></user></users></data></response>'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({});
      });
    
    }); // mobile in XML
    
    
    describe.skip('error due to missing format', function() {
      // missing `f` parameter
      
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 415,
          headers: {
            'content-type': 'text/plain'
          }
        },
''
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'offline' });
      });
    
    }); // offline in XML
    
    describe.skip('error due to missing format', function() {
      // missing `f` parameter
      
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 415,
          headers: {
            'content-type': 'text/plain'
          }
        },
''
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'offline' });
      });
    
    }); // error due to missing format
    
    describe.skip('JSON error due to missing parameter', function() {
      // missing `f` parameter
      
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            'content-type': 'application/json;charset=UTF-8'
          }
        },
'{"response":{"statusCode":460, "statusText":"Missing required parameter (k)", "data":{}}}'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'offline' });
      });
    
    }); // error due to missing format
    
    describe.skip('XML error due to missing parameter', function() {
      // missing `f` parameter
      
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            'content-type': 'text/xml;charset=UTF-8'
          }
        },
'<?xml version="1.0" encoding="UTF-8"?>\n' +
'<response xmlns="http://developer.aim.com/xsd/presence.xsd"><statusCode>460</statusCode><statusText>Missing required parameter (k)</statusText><data></data></response>'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'offline' });
      });
    
    }); // error due to missing format
    
    describe.skip('JSON error due to invalid key', function() {
      // missing `f` parameter
      
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            'content-type': 'application/json;charset=UTF-8'
          }
        },
'{"response":{"statusCode":440, "statusText":"Invalid key received from *johndoe@mac.com*", "data":{}}}'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'offline' });
      });
    
    }); // error due to missing format
    
    describe.skip('XML error due to invalid key', function() {
      
      var requestStub = { get: function(url, cb){} }
      sinon.stub(requestStub, 'get').yields(null,
        {
          statusCode: 200,
          headers: {
            'content-type': 'text/xml;charset=UTF-8'
          }
        },
'<?xml version="1.0" encoding="UTF-8"?>\n' +
'<response xmlns="http://developer.aim.com/xsd/presence.xsd"><statusCode>440</statusCode><statusText>Invalid key received from *johndoe@mac.com*</statusText><data></data></response>'
        );
      
      
      var response;
    
      before(function(done) {
        var factory = $require('../../../app/handlers/presence/aim',
          { 'request': requestStub });
        
        var handler = factory();
      
        chai.express.handler(handler)
          .end(function(res) {
            response = res;
            done();
          })
          .dispatch();
      });
    
      it('should redirect', function() {
        expect(response.statusCode).to.equal(200);
        expect(response.body).to.deep.equal({ show: 'offline' });
      });
    
    }); // error due to missing format
  
  }); // handler
  
});

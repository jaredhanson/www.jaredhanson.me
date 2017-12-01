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
  
  }); // handler
  
});

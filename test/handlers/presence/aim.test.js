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
'<response xmlns="http://developer.aim.com/xsd/presence.xsd"><statusCode>200</statusCode><statusText>Ok</statusText><data><users><user><aimId>johndoe</aimId><displayId>johndoe</displayId><friendly>John Doe</friendly><state>away</state><onlineTime>6197</onlineTime><maxIMSize>3987</maxIMSize><idleTime>90</idleTime><awayTime>4817</awayTime><invisible>0</invisible><userType>aim</userType><buddyIcon>http://o.aimcdn.net/e/1/0000xxx000x00x0x000xxx000x000xxxx0x0</buddyIcon><presenceIcon>http://o.aolcdn.com/aim/img/away.gif</presenceIcon><gOTR>0</gOTR><offTheRecord>0</offTheRecord></user></users></data></response>'
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
  
  }); // handler
  
});

exports = module.exports = function() {
  function handle(msg, next) {
    console.log('LINKBACK MESSAGE!');
    
    if (msg.data) {
      console.log(msg.data.toString());
    }
    console.log(msg.body)
    //msg.ack();
  }
  
  return [ handle ];
};

exports['@require'] = [];

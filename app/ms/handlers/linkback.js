exports = module.exports = function() {
  function handle(msg, next) {
    if (msg.data) {
      console.log('linkback: ' + msg.data.toString());
    }
    //console.log(msg.body)
    msg.ack();
  }
  
  return [ handle ];
};

exports['@require'] = [];

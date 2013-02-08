var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var twilio = require('twilio');
var jenny = {voice:'woman', language:'en-gb'};
var myTwilioNum = '+18017012048';
var myPhoneNum = '+18019071405'; //Mine
// var myPhoneNum = '+18016236842'; //Gabe's

module.exports = function(app){
  app.post('/receive-call', function(req, res){
    
    //Send an SMS text message
    client.sendSms({
        to: myPhoneNum,
        from: myTwilioNum,
        body: 'I got your phone call'
      }, 
      function(err, responseData) {
        if (!err) {
            // console.log(responseData.from); // outputs myTwilioNum
            // console.log(responseData.body); // outputs "yay you did it"
        }
      }
    );

    var resp = new twilio.TwimlResponse();
    //send TwiML
    res.set({'Content-Type': 'text/xml'});
    res.send(200, resp.toString()); 
  });  
};
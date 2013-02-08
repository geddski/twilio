var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var twilio = require('twilio');
var jenny = {voice:'woman', language:'en-gb'};
var myTwilioNum = '+18017012048';
var myPhoneNum = '+18019071405'; //Mine
var num = '+18013807870';
var site = 'http://twilio-dave.rs.af.cm/sample-call';
// var myPhoneNum = '+18016236842'; //Gabe's

module.exports = function(app){
  app.post('/receive-sms', function(req, res){
    var mp3 = req.body.Body.split(' ')[1];
    app.set('mp3', mp3);

    //make a phone call to gabe's number
    client.makeCall({
        to: num,
        // to: myTwilioNum, //TODO! put back to num. Just testing the POST.
        from: myTwilioNum,
        url: site // A URL that produces an XML document (TwiML) which contains instructions for the call
    }, function(err, responseData) {
        //executed when the call has been initiated.
        console.log(responseData.from);
    });


    // //Send an SMS text message
    // client.sendSms({
    //     to: myPhoneNum,
    //     from: myTwilioNum,
    //     body: 'I got your text: ' + req.body.Body
    //   }, 
    //   function(err, responseData) {
    //     if (!err) {
    //         // console.log(responseData.from); // outputs myTwilioNum
    //         // console.log(responseData.body); // outputs "yay you did it"
    //     }
    //   }
    // );

    var resp = new twilio.TwimlResponse();
    //send TwiML
    res.set({'Content-Type': 'text/xml'});
    res.send(200, resp.toString()); 
  });    
};
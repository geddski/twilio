var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var myTwilioNum = '+18017012048';
var myPhoneNum = '+18019071405'; //Mine
// var myPhoneNum = '+18016236842'; //Gabe's
// var site = 'http://twilio-dave.rs.af.cm/sample-call';
var site = 'http://gist.github.com/geddesign/4736342/raw/9903e9d21d762a38ad4a087babc26e3b2c1d69d4/twilio.xml';

//Place a phone call, and respond with TwiML instructions from the given URL
client.makeCall({
    to: myPhoneNum,
    from: myTwilioNum,
    url: site // A URL that produces an XML document (TwiML) which contains instructions for the call

}, function(err, responseData) {
  if (err) console.log("ERROR", err.message);
    //executed when the call has been initiated.
    console.log(responseData.from);
});
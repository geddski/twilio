var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
var myTwilioNum = '+18017012048';
var myPhoneNum = '+18016236842';

//Send an SMS text message
client.sendSms({
    to: myPhoneNum, // Any number Twilio can deliver to
    from: myTwilioNum, // A number you bought from Twilio and can use for outbound communication
    body: 'GDG Dave Geddes' // body of the SMS message   
  }, 
  function(err, responseData) { //this function is executed when a response is received from Twilio
    if (!err) { // "err" is an error received during the request, if any
        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1
        console.log(responseData.from); // outputs myTwilioNum
        console.log(responseData.body); // outputs "yay you did it"
    }
  }
);
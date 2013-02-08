var twilio = require('twilio');
var jenny = {voice:'woman', language:'en-gb'};

module.exports = function(app){
  //initiate a call
  //TODO get the MP3 from the text they send
  app.post('/sample-call', function(req, res){
      // .play('http://twilio-dave.rs.af.cm/baby-monkey.mp3');
    // var mp3 = req.body.mp3;
    var mp3 = 'http://stark-eyrie-7115.herokuapp.com/cmm.mp3';
    var resp = new twilio.TwimlResponse()
      .play(mp3);
    // resp.pause({ length:2 })
    // .say('Hello, would you like to listen to my favorite song?', jenny)
    // .gather({
    //   action: '/question-play-song',
    //   timeout: 10,
    //   numDigits: 1
    // }, function(){
    //   this.say('Press 1 for Yes', jenny)
    //     .say('Press 2 for No', jenny);
    // });

    //send TwiML
    res.set({'Content-Type': 'text/xml'});
    res.send(200, resp.toString());
  });

  // app.post('/question-play-song', function(req, res){
  //   var resp = new twilio.TwimlResponse();
  //   if (req.body.Digits === "1"){
  //     resp.say('Smashing! I knew you would want to!', jenny)
  //       .play('http://twilio-dave.rs.af.cm/baby-monkey.mp3');
  //   }
  //   else{
  //     resp.say("I'm literally crying right now, you bloody Twit.", jenny)
  //       .say("Why won't you listen to it?", jenny)
  //       .record({
  //         action: '/reason-for-no-song',
  //         transcribe: true,
  //         transcribeCallback: '/transcript-received'
  //         // transcribeCallback: 'http://requestb.in/1a1bv9n1'
  //       });
  //   }
  //   //send TwiML
  //   res.set({'Content-Type': 'text/xml'});
  //   res.send(200, resp.toString());
  // });

  // app.post('/reason-for-no-song', function(req, res){
  //   var resp = new twilio.TwimlResponse();
  //   resp.say("Let me think about that for a moment and I'll text you my response. Cheers.", jenny)
  //     .hangup();

  //   //send TwiML
  //   res.set({'Content-Type': 'text/xml'});
  //   res.send(200, resp.toString());
  // });

  // app.post('/transcript-received', function(req, res){
  //   //send a text with the transcription
  //   var client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  //   var myTwilioNum = '+18017012048';
  //   var myPhoneNum = '+18019071405';

  //   //Send an SMS text message
  //   client.sendSms({
  //     to: myPhoneNum,
  //     from: myTwilioNum,
  //     // body: 'What a lousy excuse! "' + req.body.TranscriptionText + '" - give me a break.'
  //     body: req.body.TranscriptionText
  //   }, function(err, response){});

  //   res.send(200, 'Thanks');
  // });
};
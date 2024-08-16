const twilio = require('twilio');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID  // Replace with your Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN ;    // Replace with your Auth Token
const twilioClient = twilio(accountSid, authToken);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/voice', (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say('Hello, this is your interview call.');

  twiml.gather({
    input: 'dtmf',
    numDigits: 1,
    action: '/gather',
  }).say('Press 1 to receive your interview link.');

  res.type('text/xml');
  res.send(twiml.toString());
});

app.post('/gather', (req, res) => {
  const digit = req.body.Digits;
  const twiml = new twilio.twiml.VoiceResponse();

  if (digit === '1') {
    twiml.say('Thank you. The interview link will be sent shortly.');
    // Here you can send the interview link via SMS or Email
  } else {
    twiml.say('Invalid input. Goodbye.');
  }

  res.type('text/xml');
  res.send(twiml.toString());
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

twilioClient.calls
  .create({
    url: process.env.url,
    to: process.env.to ,    // Replace with your phone number
    from: process.env.from,  // Replace with your Twilio number
  })
  .then(call => console.log(call.sid))
  .catch(err => console.error(err));

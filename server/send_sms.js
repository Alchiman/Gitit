// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = 'ACb538908fbec79c14a3b45db779d88bdd';
const authToken = '015a2612166757b6749f5e8e0765f59c';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

const sendSms = (num, message) => {
  if (num === 1) {
    // num = '+12064584774'; // ALI
  }
  if (num === 2) {
    num = '+14039919017'; //Luis
  }

  if (num === 3) {
    num = "+16046038319"; //us
  }
  client.messages
    .create({
      to: num,
      from: '2057972637',
      body: message
    })
    .then(message => message.sid);
};
module.exports = { sendSms };

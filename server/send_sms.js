// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = 'ACb538908fbec79c14a3b45db779d88bdd';
const authToken = '734430ea7dbe2a159d68a4ac0d8eb9c8';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

const sendSms = (num, message) => {
  if (num === 1) {
    num = '+12064584774'; // ALI
  }
  if (num === 2) {
    num = '+14039919017'; //Luis
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

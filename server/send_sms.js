// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = 'ACb538908fbec79c14a3b45db779d88bdd';
const authToken = '8feaff6446ad6704bf24af7e2bdd34e3';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

const sendSms = () => {
  // client.messages
  //   .create({
  //     to: '+12064584774',
  //     from: '+12057972637',
  //     body: 'Heyo Guess whoooo',
  //   })
  //   .then(message => message.sid);
};
module.exports = { sendSms };

// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);

const sendSms = (num, message) => {
  // if (num === 1) {
  //   num = '+12064584774'; // ALI
  // }
  // if (num === 2) {
  //   num = '+14039919017'; //Luis
  // }
  // client.messages
  //   .create({
  //     to: num,
  //     from: '2057972637',
  //     body: message
  //   })
  //   .then(message => message.sid);
};
module.exports = { sendSms };

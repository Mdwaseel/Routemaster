

const accountSid = 'ACa0bd8bd12a7c556a1ce3665461b41ae3';
const authToken = 'fbc38e6dc27433bfecdc135cf3674953';
const twilioNumber = '+13613385403';

//conditions to be checked (SAMPLE)
const lat = 17.36; // Sample value for latitude
const long = 78.53; // Sample value for longitude

// Function to send a WhatsApp message
function sendWhatsAppMessage() {
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: 'Your condition is true!', // The message content (SAMPLE)
      from: `whatsapp:${twilioNumber}`, // Your Twilio WhatsApp number
      to: 'whatsapp:RECIPIENT_PHONE_NUMBER', // Recipient's WhatsApp number (change it to that number to which you want the message)
    })
    .then((message) => console.log(`WhatsApp message sent. Message SID: ${message.sid}`))
    .catch((error) => console.error('Error sending WhatsApp message:', error));
}

// Check if the condition is true and send the WhatsApp message
if (lat === 17.36 && long === 78.53) {
  sendWhatsAppMessage();
}

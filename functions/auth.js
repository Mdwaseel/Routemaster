const admin = require('firebase-admin');
const axios = require('axios');
const path = require('path');

const serviceAccountPath = path.join(__dirname, '..', 'driverlogin-e139e-firebase-adminsdk-ow0zu-2a3b363eb6.json'); // Adjust the path based on the actual file location

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyCHcrJOkf_IrNyzSbAov-GDz-n-GBbC2yo",
  authDomain: "xplore-cfe1b.firebaseapp.com",
  projectId: "xplore-cfe1b",
  storageBucket: "xplore-cfe1b.appspot.com",
  messagingSenderId: "1057190293331",
  appId: "1:1057190293331:web:eab11e19c26400cc09fba6",
  measurementId: "G-NW2H81K4YX"

});

exports.handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  try {
    if (event.path === '/loginUser') {
      // User login
      const userRecord = await admin.auth().getUserByEmail(email);
      const token = await admin.auth().createCustomToken(userRecord.uid);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'User logged in successfully', token }),
      };
    } else if (event.path === '/registerUser') {
      // User registration (Sign up)
      const userRecord = await admin.auth().createUser({
        email,
        password,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'User registered successfully' }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Not found' }),
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};

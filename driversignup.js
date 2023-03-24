const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBiOzhzp2CL34XRXVa24x1vWS-ntB1UNiU",
  authDomain: "driverlogin-e139e.firebaseapp.com",
  projectId: "driverlogin-e139e",
  storageBucket: "driverlogin-e139e.appspot.com",
  messagingSenderId: "427392780029",
  appId: "1:427392780029:web:531c380b9cd0576a6de094"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


// Signup function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            console.log(result);
            alert("Signed Up " + email);
            window.location.assign("driverlogin.html");
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.massage);

        });

}



const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {

            // Signed in
            console.log(result);
            window.location.assign("driverus1.html");
            alert("Logged In " + email);;
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.massage);
            alert("Please Enter Your Valid Mail And Password")
        });
}
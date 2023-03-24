const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCHcrJOkf_IrNyzSbAov-GDz-n-GBbC2yo",
  authDomain: "xplore-cfe1b.firebaseapp.com",
  projectId: "xplore-cfe1b",
  storageBucket: "xplore-cfe1b.appspot.com",
  messagingSenderId: "1057190293331",
  appId: "1:1057190293331:web:eab11e19c26400cc09fba6",
  measurementId: "G-NW2H81K4YX"
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
            window.location.assign("studentlogin.html");
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
            window.location.assign("user.html");
            alert("Loged In " + email);;
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.massage);
            alert("Please Enter Your Valid Mail And Password")
        });
}
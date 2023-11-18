window.onload = console.log(window.location.href)
const firebaseConfig = {
    apiKey: "AIzaSyBsiV-Qx3FRbzaP1KQmkOSo0x9CHqOg0mA",
    authDomain: "unityconnect-5.firebaseapp.com",
    projectId: "unityconnect-5",
    storageBucket: "unityconnect-5.appspot.com",
    messagingSenderId: "652798825608",
    appId: "1:652798825608:web:067e982775a5c493a4bb3d",
    measurementId: "G-L0G2LSEVRG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function checkIfUserLogged() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            // var uid = user.uid;
            return true;
        } else {
            // User is signed out
            return false
        }
    });
}

function signOut() {
    console.log("Logging out in 0 seconds!")
    setTimeout(() => {
        firebase.auth().signOut()
            .then(() => {
                console.log('User signed out!');
                location.href = "../pages/login.html"
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    }, 0);
}

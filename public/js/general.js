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

function signOut() {
    console.log("Logging out in 0 seconds!")
    setTimeout(() => {
        firebase.auth().signOut()
            .then(() => {
                console.log('User signed out!');
                localStorage.removeItem("user")
                location.href = "../pages/login.html"
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    }, 0);
}

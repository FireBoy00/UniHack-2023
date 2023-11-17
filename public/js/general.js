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


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

function checkIfUser() {
    // firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/v8/firebase.User
    //         var uid = user.uid;
    //         location.href = "../pages/home.html"
    //     } else {
    //         // User is signed out
    //         if (location.href == "../pages/login.html") {
    //             location.href = "../pages/login.html"
    //         }
    //     }
    // });
    if (localStorage.getItem("user")) {
        location.href = "../pages/home.html"
    }else if (location.href == "../pages/login.html") {
        location.href = "../pages/login.html"
    }
}

window.onload = checkIfUser()
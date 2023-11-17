function signUp() {
    var email = document.querySelector("input[type='email']").value
    var password = document.querySelector("input[type='password']").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        alert(`User ${userCredential.user.uid} signed up!`)
        window.location.href = '../pages/login.html'
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(`Registration error: ${error.message}\n${error.code}`)
    });
}
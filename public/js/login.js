function loginUser(e) {
    e.preventDefault()
    var email = document.querySelector("input[type=email]").value
    var password = document.querySelector("input[type=password]").value
    var errMsg = document.querySelector(".error .message")
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user.uid;
        errMsg.innerHTML = `User ${user} logged up!`
        localStorage.setItem("user", user)
        window.location.href = '../pages/home.html'
    })
    .catch((err) => {
        var errorCode = err.code;
        if (errorCode != "auth/too-many-requests") {
            console.warn(errorCode)
            errMsg.innerHTML = "You have entered an invalid username or password"
        }else {
            console.warn(`${err.message} (${err.code})`)
            errMsg.innerHTML = err.message
        }
        errMsg.parentNode.classList.add("show")
    });
    return false;
}
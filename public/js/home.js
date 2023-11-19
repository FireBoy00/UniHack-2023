const template = document.querySelector('#popular-creater-temp');
const container = document.querySelector('.your-creator');
const discovery = document.querySelector('#discovery');
const myevents = document.querySelector('#my-events');
const friends = document.querySelector('#friends');
const favorite = document.querySelector('#favorite');

/// selecting menu

discovery.addEventListener('click',() => {
    discovery.style.backgroundColor = 'rgb(34, 34, 34)';
    myevents.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    location.reload()
});

myevents.addEventListener('click',() => {
    myevents.style.backgroundColor = 'rgb(34, 34, 34)';
    discovery.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
});

friends.addEventListener('click',() => {
    friends.style.backgroundColor = 'rgb(34, 34, 34)';
    discovery.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    myevents.style.backgroundColor = 'black';
});

favorite.addEventListener('click',() => {
    favorite.style.backgroundColor = 'rgb(34, 34, 34)';
    discovery.style.backgroundColor = 'black';
    myevents.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
});

/// selecting filter
const content = document.querySelector('body .content');
const ev_load = document.querySelector('body .events-load');
const rec = document.querySelector('#ev-rec');

rec.addEventListener('click', () => {
    content.style.display = 'none';
    ev_load.style.display = 'flex';
})

/// creating eventsbafter selecting filter
  
function hoverEffon(cont) {
    // Hide the text
    cont.querySelector('.date').style.display = 'none';
    cont.querySelector('.time').style.display = 'none';

    // Show the button
    cont.querySelector('.join').style.display = 'block';
}
function hoverEffoff(cont) {
    // Show the text
    cont.querySelector('.date').style.display = 'block';
    cont.querySelector('.time').style.display = 'block';

    // Hide the button
    cont.querySelector('.join').style.display = 'none';
}


function loadUI() {
    if (!localStorage.getItem("user")) {
        location.href = "../pages/login.html"
    }
    firebase.firestore().collection("users").doc(localStorage.getItem("user")).get().then((doc) => {
        document.querySelector(".options-down .account span").innerHTML = doc.data().full_name
        document.querySelector("span#welcome").innerHTML = `Welcome to UnityConnect, ${doc.data().username}!`
        document.querySelector(".options-down #WelcomeProfil").innerHTML = `Hello ${doc.data().username}!`
    })
}

window.onload = loadUI()
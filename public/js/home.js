const template = document.querySelector('#popular-creater-temp');
const container = document.querySelector('.your-creator');
const discovery = document.querySelector('#discovery');
const myevents = document.querySelector('#my-events');
const friends = document.querySelector('#friends');
const favorite = document.querySelector('#favorite');

/// selecting menu


/// check if u come from friends

window.onload = () => {
    var page = localStorage.getItem('page-opened');
    console.log(page)
    switch (page){
        case 'myevents':
            console.log(1)
            localStorage.removeItem('page-opened');
            myevents.style.backgroundColor = 'rgb(34, 34, 34)';
            discovery.style.backgroundColor = 'black';
            favorite.style.backgroundColor = 'black';
            friends.style.backgroundColor = 'black';
            content.style.display = 'none';
            ev_load.style.display = 'flex';
            loadevents('my-events',25);
            break;
        case 'favorite':
            console.log(2)
            localStorage.removeItem('page-opened');
            favorite.style.backgroundColor = 'rgb(34, 34, 34)';
            discovery.style.backgroundColor = 'black';
            myevents.style.backgroundColor = 'black';
            friends.style.backgroundColor = 'black';
            content.style.display = 'none';
            ev_load.style.display = 'flex';
            loadevents('favorite-event',25);
            break;
        default:
            console.log(3)
            content.style.display = 'flex';
            ev_load.style.display = 'none';
            break;
    }
}

/// discovery
discovery.addEventListener('click',() => {
    discovery.style.backgroundColor = 'rgb(34, 34, 34)';
    myevents.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    location.reload();
});


/// myevents
myevents.addEventListener('click',() => {
    myevents.style.backgroundColor = 'rgb(34, 34, 34)';
    discovery.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
    content.style.display = 'none';
    ev_load.style.display = 'flex';
    loadevents('my-events',25);
});


/// friends
friends.addEventListener('click',() => {
    friends.style.backgroundColor = 'rgb(34, 34, 34)';
    discovery.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    myevents.style.backgroundColor = 'black';
    window.location.href = '../pages/friends.html';
});


/// favorite
favorite.addEventListener('click',() => {
    favorite.style.backgroundColor = 'rgb(34, 34, 34)';
    discovery.style.backgroundColor = 'black';
    myevents.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
    content.style.display = 'none';
    ev_load.style.display = 'flex';
    loadevents('favorite-event',25);
});

/// selecting filter
const content = document.querySelector('body .content');
const ev_load = document.querySelector('body .events-load');
const rec = document.querySelector('#ev-rec');
const fav = document.querySelector('#ev-fav-creators');
const upcoming = document.querySelector('#ev-year');

rec.addEventListener('click', () => {
    content.style.display = 'none';
    ev_load.style.display = 'flex';
    loadevents('recommended',25);
})

fav.addEventListener('click', () => {
    content.style.display = 'none';
    ev_load.style.display = 'flex';
    loadevents('favorite-creators',25);
})

upcoming.addEventListener('click', () => {
    content.style.display = 'none';
    ev_load.style.display = 'flex';
    loadevents('upcoming', 25);
})

function getDayNameFromDate(dateString) {
    // Split the date string into year, month, and day components
    var [year, month, day] = dateString.split('-');

    // Create a Date object using the extracted components
    var date = new Date(year, month - 1, day); // Months are zero-based

    // Days of the week array
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Get the numeric day of the week
    var dayIndex = date.getDay();

    // Map the numeric day to the corresponding day name
    var dayName = daysOfWeek[dayIndex];

    return dayName;
}

// Example usage
var dateString = "2023-11-09";
var dayName = getDayNameFromDate(dateString);
console.log(dayName);


function loadevents(location, number) {
    const ev = document.querySelector("#ev")
    const body = document.querySelector(".event-cont")
    var title = document.querySelector('.events-load #title');
    firebase.firestore().collection("events").get().then((querySnapshot) => {
        body.innerHTML = ''
        querySnapshot.forEach((doc) => {
            var clone = ev.content.cloneNode(true)
            clone.querySelector(".date_time .date h2").innerHTML = getDayNameFromDate(doc.data().date)
            clone.querySelector(".date_time .time h1").innerHTML = doc.data().time
            clone.querySelector(".text").innerHTML = doc.data().name
            clone.querySelector(".text2").innerHTML = doc.data().description
            body.append(clone)
        });
    });

    switch (location){
        case 'recommended':
            break;
        case 'favorite-creators':
            title.innerHTML = "From your favorite creators";
            break;
        case 'upcoming':
            title.innerHTML = "Upcoming events";
            break;
        case 'favorite-event':
            title.innerHTML = "Your favorite  events";
            break;
        case 'my-events':
            title.innerHTML = "Your events";
            break;
    }
}
  
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
  /// ... on bigger text descriere event
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

function openEvent() {
    sessionStorage.setItem("event_mode", "view")
    location.href = '../pages/CreareEveniment.html'
}

window.onload = loadUI()
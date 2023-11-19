const template = document.querySelector('#popular-creater-temp');
const container = document.querySelector('.your-creator');

const discovery = document.querySelector('#discovery');
const myevents = document.querySelector('#my-events');
const friends = document.querySelector('#friends');
const favorite = document.querySelector('#favorite');


/// creating popular characters

function copytemplate(){
    console.log(`User: ${checkIfUserLogged()}`)
}

window.onload = copytemplate()

/// selecting menu


/// discovery
discovery.addEventListener('click',() => {
    discovery.style.backgroundColor = 'rgb(34, 34, 34)';
    myevents.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    location.reload()
});


/// myevents
myevents.addEventListener('click',() => {
    myevents.style.backgroundColor = 'rgb(34, 34, 34)';
    discovery.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
    loadevents('my-events',25);
});


/// friends
friends.addEventListener('click',() => {
    friends.style.backgroundColor = 'rgb(34, 34, 34)';
    discovery.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    myevents.style.backgroundColor = 'black';
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



/// creating eventsbafter selecting filter

function loadevents(location, number) {
    const ev = document.querySelector("#ev")
    const body = document.querySelector(".event-cont")
    var title = document.querySelector('.events-load #title');
    for (let i = 0; i < number; i++) {
      var clone = ev.content.cloneNode(true)
      body.append(clone)
    }

    switch (location){
        case 'recommended':
            break;
        case 'favorite-creators':
            title.innerHTML = "From your favorite creators";
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

  window.addEventListener('DOMContentLoaded', () =>{
    var textContainer = document.querySelector('.chenar_timp_desc .desc');
    var lineHeight = parseInt(window.getComputedStyle(textContainer).lineHeight);
    var maxRows = 2;
    var maxHeight = maxRows * lineHeight;

    if (textContainer.offsetHeight > maxHeight) {
        // Text occupies more than 2 rows, truncate and add three points
        var content = textContainer.textContent.trim();
        textContainer.innerHTML = content.substring(0, content.lastIndexOf(' ', (maxRows * 10))) + '...';
      }
  })

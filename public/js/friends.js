const template = document.querySelector('#popular-creater-temp');
const container = document.querySelector('.your-creator');

const discovery = document.querySelector('#discovery');
const myevents = document.querySelector('#my-events');
const friends = document.querySelector('#friends');
const favorite = document.querySelector('#favorite');



discovery.addEventListener('click',() => {
    discovery.style.backgroundColor = 'rgb(34, 34, 34)';
    myevents.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    window.location.href = "../pages/home.html"
});

myevents.addEventListener('click',() => {
    myevents.style.backgroundColor = 'rgb(34, 34, 34)';
    discovery.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
    localStorage.setItem('page-opened', 'myevents');
    window.location.href = "../pages/home.html";
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
    localStorage.setItem('page-opened', 'favorite');
    window.location.href = "../pages/home.html";
  });

function test() {
  var tem = document.querySelector(".preten")
  for (let i = 0; i < 250; i++) {
    var clone = tem.content.cloneNode(true)
    document.querySelector(".divul_suprem").appendChild(clone)
  }
}

window.onload = test()
/// 

const template = document.querySelector('#popular-creater-temp');
const container = document.querySelector('.your-creator');

const discovery = document.querySelector('#discovery');
const myevents = document.querySelector('#my-events');
const friends = document.querySelector('#friends');
const favorite = document.querySelector('#favorite');


function copytemplate(temp, cont, number){

    for ( let i = 1; i <= number; i++)
    {
        var clone = temp.content.cloneNode(true);
        cont.appendChild(clone);
    }
    console.log(clone.innerHTML);
}

discovery.addEventListener('click',() => {
    discovery.style.backgroundColor = 'rgb(34, 34, 34)';
    myevents.style.backgroundColor = 'black';
    friends.style.backgroundColor = 'black';
    favorite.style.backgroundColor = 'black';
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

window.onload = copytemplate(template, container, 3)

/// 

const template = document.querySelector('#popular-creater-temp');
const container = document.querySelector('.your-creator');

const events = document.querySelector('.events');
const myevents = document.querySelector('.my-events');

function copytemplate(temp, cont, number){

    for ( let i = 1; i <= number; i++)
    {
        var clone = temp.content.cloneNode(true);
        cont.appendChild(clone);
    }
    console.log(clone.innerHTML);
}

events.addEventListener('click',() => {
    events.style.backgroundColor = 'rgb(34, 34, 34)';
    myevents.style.backgroundColor = 'black';
});

myevents.addEventListener('click',() => {
    myevents.style.backgroundColor = 'rgb(34, 34, 34)';
    events.style.backgroundColor = 'black';
});

window.onload = copytemplate(template, container, 3)

/// 


function test() {
  const ev = document.querySelector("#ev")
  const body = document.querySelector(".cont")
  for (let i = 0; i < 25; i++) {
    var clone = ev.content.cloneNode(true)
    body.append(clone)
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


window.onload = test()

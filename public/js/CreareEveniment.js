/// Select date
var dateInput = document.getElementById('datepicker');
dateInput.value = '';
dateInput.setAttribute('data-placeholder', 'Select a date');
dateInput.style.color = 'rgb(153, 153, 153)';
dateInput.addEventListener('change', function() {
    if (dateInput.value !== '') {
        dateInput.removeAttribute('data-placeholder');
        dateInput.style.color = '';
    } 
    else {
        dateInput.setAttribute('data-placeholder', 'Select a date');
        dateInput.style.color = 'rgb(153, 153, 153)';
    }
});

/// Select time
var timeInput = document.getElementById('timepicker');
timeInput.value = '';
timeInput.setAttribute('data-placeholder', 'Select a time');
timeInput.style.color = 'rgb(153, 153, 153)';
timeInput.addEventListener('change', function() {
    if (timeInput.value !== '') {
        timeInput.removeAttribute('data-placeholder');
        timeInput.style.color = '';
    } 
    else {
        timeInput.setAttribute('data-placeholder', 'Select a time');
        timeInput.style.color = 'rgb(153, 153, 153)';
    }
});

const colorPicker = document.getElementById('colorPicker');
                
                    colorPicker.addEventListener('change', function(event) {
                      const selectedColor = event.target.value;
                      console.log('Selected color:', selectedColor);
                      // You can use the selectedColor value in your application as needed
                    });


function loadUI() {
    const mode = sessionStorage.getItem("event_mode")
    firebase.firestore().collection("users").doc(localStorage.getItem("user")).get().then((doc) => {
        switch (mode) {
            case "create":
                document.querySelector(".input-box .creator").value = doc.data().username
                document.querySelector(".input-box .language").value = "Default (English)"
                document.querySelector(".join-now-button").innerHTML = "Create event"
                document.querySelector(".join-now-button").onclick = () => {createEvent()}
                break;
            case "edit":
                document.querySelectorAll("input").forEach((input, i) => {
                    input.disabled = false
                    input.classList.remove("disabled")
                })
                document.querySelector(".description").disabled = false
                document.querySelector(".description").classList.remove("disabled")
                break;
                case "view":
                    document.querySelectorAll("input").forEach((input, i) => {
                        input.disabled = true
                        input.classList.add("disabled")
                    })
                    document.querySelector(".description").disabled = true
                    document.querySelector(".description").classList.add("disabled")
                break;
            default:
                window.alert(`There was an internal error, you'll be redirected to home.`)
                location.href = "../pages/home.html"
                break;
        }
    })
}
window.onload = loadUI()

function createEvent() {
    console.log("Creem event")
    var name = document.querySelector(".title").value
    var creator = document.querySelector(".input-box .creator").value
    var date = document.querySelector(".input-box .date").value
    var time = document.querySelector(".input-box .time").value
    var color = document.querySelector(".input-color .color").value
    var language = document.querySelector(".input-box .language").value
    var location = document.querySelector(".input-box .location").value
    var description = document.querySelector("textarea.description").value
    firebase.firestore().collection("events").add({
        name: name,
        creator: creator,
        date: date,
        time: time,
        language: language,
        location: location,
        color: color,
        description: description,
        participants: [],
    })
    .then((doc) => {
        console.log(`Event details stored successfully with ID: [${doc.id}]`);
    })
    .catch((error) => {
        console.error("Error storing account details: ", error);
    });
}
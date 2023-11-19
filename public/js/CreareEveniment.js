/// Select date
var dateInput = document.getElementById('datepicker');
dateInput.value = '';
dateInput.setAttribute('data-placeholder', 'Select a date');
dateInput.style.color = 'gray';
dateInput.addEventListener('change', function() {
    if (dateInput.value !== '') {
        dateInput.removeAttribute('data-placeholder');
        dateInput.style.color = '';
    } 
    else {
        dateInput.setAttribute('data-placeholder', 'Select a date');
        dateInput.style.color = 'gray';
    }
});

/// Select time
var timeInput = document.getElementById('timepicker');
timeInput.value = '';
timeInput.setAttribute('data-placeholder', 'Select a time');
timeInput.style.color = 'gray';
timeInput.addEventListener('change', function() {
    if (timeInput.value !== '') {
        timeInput.removeAttribute('data-placeholder');
        timeInput.style.color = '';
    } 
    else {
        timeInput.setAttribute('data-placeholder', 'Select a time');
        timeInput.style.color = 'gray';
    }
});

const colorPicker = document.getElementById('colorPicker');
                
                    colorPicker.addEventListener('change', function(event) {
                      const selectedColor = event.target.value;
                      console.log('Selected color:', selectedColor);
                      // You can use the selectedColor value in your application as needed
                    });

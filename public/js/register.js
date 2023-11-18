var listaTari = ["Andorra", "Arab Emirates United", "Afghanistan", "Antigua and Barbuda", "Anguilla", "Alaska", "Albania", "Armenia", "Netherlands Antilles", "Angola", "Antarctica", "Argentina", "American Samoa", "Austria", "Australia", "Aruba", "Åland Islands", "Azerbaijan", "Bosnia and Herzegovina", "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bahrain", "Burundi", "Benin", "Bermuda", "Brunei Darussalam", "Bolivia", "Brazil", "Bahamas", "Bhutan", "Botswana", "Belarus", "Belize", "Canada", "Cocos (Keeling) Islands", "Congo, The Democratic Republic Of The", "Central African Republic", "Congo", "Switzerland", "Côte D'Ivoire", "Cook Islands", "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cape Verde", "Curaçao", "Christmas Island", "Cyprus", "Czech Republic", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic", "Algeria", "Ecuador", "Estonia", "Egypt", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Falkland Islands (Malvinas)", "Micronesia, Federated States Of", "Faroe Islands", "France", "Gabon", "United Kingdom", "Grenada", "Georgia", "Guernsey", "Ghana", "Gibraltar", "Greenland", "Gambia", "Guinea", "Equatorial Guinea", "Greece", "South Georgia and the South Sandwich Islands", "Guatemala", "Guam", "Guinea-Bissau", "Guyana", "Hong Kong", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "Isle of Man", "India", "Iraq", "Iran, Islamic Republic Of", "Iceland", "Italy", "Jersey", "Jamaica", "Jordan", "Japan", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Comoros", "Saint Kitts And Nevis", "Korea, Democratic People's Republic Of", "Korea, Republic of", "Kuwait", "Cayman Islands", "Kazakhstan", "Lao People's Democratic Republic", "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco", "Moldova, Republic of", "Montenegro", "Saint Martin", "Madagascar", "Marshall Islands", "Macedonia, the Former Yugoslav Republic Of", "Mali", "Myanmar", "Mongolia", "Macao", "Northern Mariana Islands", "Martinique", "Mauritania", "Montserrat", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "New Caledonia", "Niger", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "Nauru", "Niue", "New Zealand", "Oman", "Panama", "Peru", "French Polynesia", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Pitcairn", "Puerto Rico", "Palestine, State of", "Portugal", "Palau", "Paraguay", "Qatar", "Réunion", "Romania", "Serbia", "Russian Federation", "Rwanda", "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Saint Helena", "Slovenia", "Slovakia", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "South Sudan", "Sao Tome and Principe", "El Salvador", "Sint Maarten", "Syrian Arab Republic", "Swaziland", "Turks and Caicos Islands", "Chad", "French Southern Territories", "Togo", "Thailand", "Tajikistan", "Tokelau", "Timor-Leste", "Turkmenistan", "Tunisia", "Tonga", "Turkey", "Trinidad and Tobago", "Tuvalu", "Taiwan, Republic Of China", "Tanzania, United Republic of", "Ukraine", "Uganda", "United States Minor Outlying Islands", "United States", "Uruguay", "Uzbekistan", "Holy See (Vatican City State)", "Saint Vincent And The Grenadines", "Venezuela, Bolivarian Republic of", "Virgin Islands, British", "Virgin Islands, U.S.", "Vietnam", "Vanuatu", "Wallis and Futuna", "Samoa", "Yemen", "Mayotte", "South Africa", "Zambia", "Zimbabwe"]
var prescurtari = ["AD", "AE", "AF", "AG", "AI", "AK", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BM", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GG", "GH", "GI", "GL", "GM", "GN", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]

function genereazaOptiuni() {
    var selectTara = document.querySelector("#counutryInput")
    var options = selectTara.querySelectorAll("option")
    while (options.childElementCount) {
        options.removeChild(options.lastChild)
    }
    for (var i = 0; i < listaTari.length; i++) {
        var option = document.createElement("option")
        option.text = listaTari[i]
        option.value = prescurtari[i]
        selectTara.appendChild(option)
    }
}

var errMsg = document.querySelector(".error .message")
var form = document.querySelector("form")
function aSignUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            errMsg.innerHTML = `User ${userCredential.user.uid} signed up!\nYou'll be redirected in 3 seconds!`
            errMsg.parentNode.classList.add("show")
            var name = form.querySelector(".name").value
            var username = form.querySelector(".username").value
            var email = form.querySelector(".email").value
            var tel = form.querySelector(".tel").value
            var country = form.querySelector("#counutryInput").value
            var gender = form.querySelector("input[type='radio']:checked").value
            firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).set({
                full_name: name,
                username: username,
                email: email,
                phone: tel,
                country: country,
                gender: gender
            })
            .then(() => {
                console.log(`Account details stored successfully for user [${firebase.auth().currentUser.uid}]`);
                setTimeout(() => {
                    window.location.href = '../pages/login.html'
                }, 3000);
            })
            .catch((error) => {
                console.error("Error storing account details: ", error);
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            errMsg.innerHTML = error.message
            errMsg.parentNode.classList.add("show")
            console.error(`Registration error: ${error.message}\n${error.code}`)
            // form.reset()
        });
}

function signUp(e) {
    e.preventDefault()
    var email = form.querySelector("input[type='email']").value
    var password = form.querySelector("input[type='password']").value
    if (form.querySelector(".pass").value !== form.querySelector(".confPass").value) {
        errMsg.parentNode.classList.add("show")
        errMsg.innerHTML = "The passwords don't match"
    }else if (form.querySelector("#counutryInput").value === "") {
        errMsg.parentNode.classList.add("show")
        errMsg.innerHTML = "Please select a country"
    }else if (!form.querySelector("input[type='radio']:checked")){
        errMsg.parentNode.classList.add("show")
        errMsg.innerHTML = "Please select your gender"
    }else {
        aSignUp(email, password)
    }
    return false;
}

window.onload = genereazaOptiuni()
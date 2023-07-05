const name = document.querySelector('.name-input');
const nameInput = document.querySelector('#name');
const wrongName = document.createElement('div');
name.insertBefore(wrongName, nameInput);

const email = document.querySelector('.email-input');
const emailInput = document.querySelector('#email');
const wrongEmail = document.createElement('div');
email.insertBefore(wrongEmail, emailInput);

const phone = document.querySelector('.phone-input');
const phoneInput = document.querySelector('#phone');
const wrongPhone = document.createElement('div');
phone.insertBefore(wrongPhone, phoneInput);

const interest = document.querySelector('.interest-options');
const interestSelect = document.querySelector('#interest');
const noInterest = document.createElement('div');
interest.insertBefore(noInterest, interestSelect);

const contactHeading = document.querySelector('.contact-heading');
const button = document.querySelector('#button');
const validateConfirm = document.createElement('div');
contactHeading.appendChild(validateConfirm);

const form = document.querySelector('#form');


nameInput.addEventListener("input", (e) => {
    if (!nameInput.validity.valid) {
        wrongName.textContent = "You can only put characters in here!";
    } else {
        wrongName.textContent = "";
    }
});

emailInput.addEventListener("input", (e) => {
    if (!emailInput.validity.valid) {
        wrongEmail.textContent = "You can only put email addresses in here!"
    } else {
        wrongEmail.textContent = "";
    }
});

phoneInput.addEventListener("input", (e) => {
    if (!phoneInput.validity.valid) {
        wrongPhone.textContent = "You can only put numbers in here!";
    } else {
        wrongPhone.textContent = "";
    }
});

interestSelect.addEventListener("click", (e) => {
    if (!interestSelect.value) {
        noInterest.textContent = "Please select an option.";
    } else {
        noInterest.textContent = "";
    }
});

button.addEventListener("submit", (e) => {

})
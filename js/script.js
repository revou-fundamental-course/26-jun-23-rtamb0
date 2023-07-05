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

const button = document.querySelector('#button');


nameInput.addEventListener("input", (e) => {
    if (nameInput.validity.valid) {
        wrongName.textContent = "";
    } else {
        wrongName.textContent = "You can only put characters in here!";
    }
});

emailInput.addEventListener("input", (e) => {
    if (emailInput.validity.valid) {
        wrongEmail.textContent = "";
    } else {
        wrongEmail.textContent = "You can only put email addresses in here!";
    }
});

phoneInput.addEventListener("input", (e) => {
    if (phoneInput.validity.valid) {
        wrongPhone.textContent = "";
    } else {
        wrongPhone.textContent = "You can only put numbers in here!";
    }
});

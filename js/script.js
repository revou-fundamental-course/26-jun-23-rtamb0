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

const message = document.querySelector('.message-input');
const messageInput = document.querySelector('#message');
const wrongMessage = document.createElement('div');
message.insertBefore(wrongMessage, messageInput);
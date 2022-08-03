'use strict';

const okUsers = ['chris', 'kassie', 'ben'];
const welcomeText = document.querySelector('#welcome-text');
welcomeText.classList.add('hidden');

document.querySelector('.check').addEventListener('click', function () {
  alert(
    `Sending tons of spam email to ${document.querySelector('.email').value}!!`
  );
});
document.querySelector('.login').addEventListener('click', function () {
  let loginName = prompt('Please enter your first name:');
  if (loginName != null) {
    if (okUsers.includes(loginName.toLocaleLowerCase())) {
      document.querySelector(
        '#header-text'
      ).textContent = `Photography For ${loginName}`;
      document.querySelector(
        '#welcome-text'
      ).textContent = `Welcome ${loginName}!`;
      const welcomeText = document.querySelector('#welcome-text');
      welcomeText.classList.remove('hidden');
    } else {
      document.querySelector(
        '#header-text'
      ).textContent = `Photography For All`;
      welcomeText.classList.add('hidden');
    }
  }
});

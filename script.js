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
  let loginName = prompt('Please enter your first name (hint: me or staff):');
  if (loginName != null) {
    if (okUsers.includes(loginName.toLocaleLowerCase())) {
      document.querySelector(
        '#header-text'
      ).textContent = `Photography For ${loginName}`;
      welcomeText.textContent = `Welcome ${loginName}!`;
      welcomeText.classList.remove('hidden');
    } else {
      document.querySelector(
        '#header-text'
      ).textContent = `Photography For All`;
      welcomeText.textContent = `Welcome ${
        loginName || 'anonymous'
      }! You are not yet an authorized user on this site. Please submit your email address below.`;
      welcomeText.classList.remove('hidden');
    }
  } else {
    welcomeText.classList.add('hidden');
    document.querySelector('#header-text').textContent = `Photography For All`;
  }
});

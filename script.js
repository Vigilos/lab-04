'use strict';

const okUsers = ['chris', 'kassie', 'ben'];
const welcomeText = document.querySelector('#welcome-text');
const headerText = document.querySelector('#header-text');
welcomeText.classList.add('hidden');
let text;

document.querySelector('.check').addEventListener('click', function () {
  alert(
    `Sending tons of spam email to ${document.querySelector('.email').value}!!`
  );
});
document.querySelector('.login').addEventListener('click', function () {
  let loginName = prompt('Please enter your first name (hint: me or staff):');
  if (loginName != null) {
    if (okUsers.includes(loginName.toLocaleLowerCase())) {
      changeText(loginName, true);
    } else {
      changeText(loginName || 'Anonymous', false);
    }
  }
});

const changeText = function (name, onUserList) {
  if (onUserList) {
    headerText.textContent = `Photography For ${name}`;
    text = `Welcome ${name}!`;
  } else {
    headerText.textContent = 'Photography For All';
    text = `Welcome ${name}! You are not yet an authorized user on this site. Please submit your email address below or try to login in again.`;
  }
  welcomeText.textContent = text;
  welcomeText.classList.remove('hidden');
};

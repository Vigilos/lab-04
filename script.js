'use strict';

const okUsers = ['chris', 'kassie', 'ben'];
const welcomeText = document.querySelector('#welcome-text');
const headerText = document.querySelector('#header-text');
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
      setHeaderText(loginName);
      welcomeText.textContent = `Welcome ${loginName}!`;
      welcomeText.classList.remove('hidden');
    } else {
      setHeaderText('All');
      welcomeText.textContent = `Welcome ${
        loginName || 'anonymous'
      }! You are not yet an authorized user on this site. Please submit your email address below.`;
      welcomeText.classList.remove('hidden');
    }
  } else {
    welcomeText.classList.add('hidden');
    setHeaderText('All');
  }
});

const setHeaderText = function (name) {
  headerText.textContent = `Photography For ${name}`;
};

'use strict';

const okUsers = ['chris', 'kassie', 'ben'];
const welcomeText = document.querySelector('#welcome-text');
const headerText = document.querySelector('#header-text');
let text;
let rating;
let stars = '';
welcomeText.classList.add('hidden');

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

document.querySelector('.rate').addEventListener('click', function () {
  // const rating = Number(document.querySelector('.topicRate').value);
  while (!(rating <= 5 && rating >= 1)) {
    rating = Number(
      prompt('Please rate the Drone topic on a scale of 1 to 5:')
    );
  }
  for (let i = 1; i <= rating; i++) {
    stars += '⭐';
  }
  document.querySelector('#drone-rating').textContent = stars;
  rating = 0;
  stars = '';
});

document.querySelector('.check').addEventListener('click', function () {
  alert(
    `Sending tons of spam email to ${document.querySelector('.email').value}!!`
  );
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

/*~~~~~~~~~~~~~~~~~~~~ MANTRA AND AFFIRMATION ARRAYS ~~~~~~~~~~~~~~~~~~~~*/

var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',    
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
];

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
];

/*~~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~ MAIN PAGE ~~~~~~~~~~*/

var messagePage = document.querySelector('.page-wrapper');
var messageBox = document.querySelector('.message-box-display-outer');

var affirmationRadio = document.getElementById('affirmation-button');
var mantraRadio = document.getElementById('mantra-button');
var recieveMessageButton = document.querySelector('.fetch-message');

var meditativePerson = document.querySelector('.meditative-person');

var actualMessage = document.querySelector('.actual-message');

var clearButtonWrapper = document.querySelector('.clear-button-wrapper');
var clearButton = document.querySelector('#clear-message');

var userInputPageButtonWrap = document.querySelector('.user-input-button-wrapper');
var userInputPageButton = document.querySelector('#input-page-button');

/*~~~~~~~~~~ FORM PAGE ~~~~~~~~~~*/

var formPage = document.querySelector('.outer-form-wrapper');

var userAffirmation = document.querySelector('#affirmation-input-id');
var userMantra = document.querySelector('#mantra-input-id');

var actualMessageUserField = document.querySelector('.actual-message');

var userSubmitButton = document.querySelector('#user-input-button');
var backToMainButton = document.querySelector('#back-to-main');

var userInputField = document.querySelector('.user-input-fields');

/*~~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~ WINDOW ~~~~~~~~~~*/

window.addEventListener('load', recieveButtonCheck);

/*~~~~~~~~~~ BUTTONS ~~~~~~~~~~*/

recieveMessageButton.addEventListener('click', messageSelectHandler);
clearButton.addEventListener('click', clearMessage);
userInputPageButton.addEventListener('click', showFormPage);

userSubmitButton.addEventListener('click', userInputsHandler);
backToMainButton.addEventListener('click', showMainPage);

/*~~~~~~~~~~ RADIO BUTTONS ~~~~~~~~~~*/

affirmationRadio.addEventListener('click', recieveButtonCheck);
mantraRadio.addEventListener('click', recieveButtonCheck);

/*~~~~~~~~~~ FIELDS ~~~~~~~~~~*/

userAffirmation.addEventListener('click', toggleInputFields);
userMantra.addEventListener('click', toggleInputFields);

/*~~~~~~~~~~~~~~~~~~~~ EVENT HANDLERS ~~~~~~~~~~~~~~~~~~~~*/

function messageSelectHandler () {
  if (document.getElementById('affirmation-button').checked) {
    affMessage = getRandomMessage(affirmations);
    actualMessage.innerHTML = affMessage;
  } else {
    manMessage = getRandomMessage(mantras);
    actualMessage.innerHTML = manMessage;
  };
  messageBox.classList.remove('hidden');
  meditativePerson.classList.add('hidden');
  clearButtonWrapper.classList.remove('hidden');
  userInputPageButtonWrap.classList.add('hidden');
  affirmationRadio.checked = false;
  mantraRadio.checked = false;
  recieveButtonCheck();
};

userAffirmation.setCustomValidity('Please Input A Positive Vibe.');
userMantra.setCustomValidity('Please Input A Positive Vibe.');

function userInputsHandler () {
  showUserMessage();
  messageBox.classList.remove('hidden');
  meditativePerson.classList.add('hidden');
  clearButtonWrapper.classList.remove('hidden');
  userInputPageButtonWrap.classList.add('hidden');
};

/*~~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~ ON LOAD ~~~~~~~~~~*/

function recieveButtonCheck () {
  if (affirmationRadio.checked === false && mantraRadio.checked === false) {
    document.getElementById('fetch-button').disabled = true;
    document.getElementById('fetch-button').classList.remove('hover');
  } else {
    document.getElementById('fetch-button').disabled = false;
    document.getElementById('fetch-button').classList.add('hover');
  }
};

/*~~~~~~~~~~ MAIN PAGE ~~~~~~~~~~*/

function getRandomMessage (anArray) {
  aMessageIndex = Math.floor(Math.random() * anArray.length);
  return anArray.at(aMessageIndex);
};

function clearMessage () {
  messageBox.classList.add('hidden');
  meditativePerson.classList.remove('hidden');
  clearButtonWrapper.classList.add('hidden');
  userInputPageButtonWrap.classList.remove('hidden');
  formPage.classList.add('hidden');
};

/*~~~~~~~~~~ CHANGE PAGES ~~~~~~~~~~*/

function showFormPage () {
  formPage.classList.remove('hidden');
  messagePage.classList.add('hidden');
  userInputPageButtonWrap.classList.add('hidden');
};

function showMainPage () {
  formPage.classList.add('hidden');
  messagePage.classList.remove('hidden');
  userInputPageButtonWrap.classList.remove('hidden');
};

/*~~~~~~~~~~ USER INPUT CHECKERS ~~~~~~~~~~*/

function affirmationIsFocused () {
  userAffirmation.removeAttribute('placeholder');
};

function affirmationIsNotFocused () {
  userAffirmation.setAttribute('placeholder', 'Your Affirmation');
  toggleInputFields();
};

function mantraIsFocused () {
  userMantra.removeAttribute('placeholder');
};

function mantraIsNotFocused () {
  userMantra.setAttribute('placeholder', 'Your Mantra');
  toggleInputFields();
};

/*~~~~~~~~~~ FORM PAGE ~~~~~~~~~~*/

function toggleInputFields () {
  if (userAffirmation.placeholder === '' || userAffirmation.value !== '') {
    userMantra.removeAttribute('required');
    userMantra.setAttribute("disabled", true);
  } else if (userMantra.placeholder === '' || userMantra.value !== '') {
    userAffirmation.removeAttribute('required');
    userAffirmation.setAttribute("disabled", true);
  } else if (userAffirmation.placeholder !== '' && userMantra.placeholder !== '') {
    userMantra.setAttribute('required', true);
    userMantra.removeAttribute('disabled');
    userAffirmation.setAttribute('required', true);
    userAffirmation.removeAttribute('disabled');
  }
};

function showUserMessage () {
  if (userAffirmation.value === '' && userMantra.value === '') {
    return;
  } else if (userAffirmation.value !== '') {
    affirmations.push(userAffirmation.value);
    actualMessageUserField.innerText = userAffirmation.value;
  } else if (userMantra.value !== '') {
    mantras.push(userMantra.value);
    actualMessageUserField.innerText = userMantra.value;
  }
  messageBox.classList.remove('hidden');
  meditativePerson.classList.add('hidden');
  clearButtonWrapper.classList.remove('hidden');
  userInputPageButtonWrap.classList.add('hidden');
  userAffirmation.value = '';
  userMantra.value = '';
  showMainPage()
};
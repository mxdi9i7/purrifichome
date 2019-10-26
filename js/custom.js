import handleTranslate from './translate.js';

const flagUrl = './assets/vendor/flag-icon-css/flags/4x3/';
const handleFlagChange = () => {
  const currentLang = window.localStorage.getItem('language');
  switch (currentLang) {
    case 'cn':
      changeToCN();
      break;
    case 'en':
      changeToEN();
    default:
      handleTranslate();
      break;
  }
  handleTranslate();
};

const changeToCN = () => {
  $('#flag-block img').attr('src', flagUrl + 'cn.svg');
  $('#flag-block #lg-label').text('中文');
  $('#flag-block #sm-label').text('中文');
  $('#cn-link').addClass('active');
  $('#en-link').removeClass('active');
};

const changeToEN = () => {
  $('#flag-block img').attr('src', flagUrl + 'us.svg');
  $('#flag-block #lg-label').text('US');
  $('#flag-block #sm-label').text('United States');
  $('#en-link').addClass('active');
  $('#cn-link').removeClass('active');
};

$('#en-link').click(() => {
  window.localStorage.setItem('language', 'en');
  handleFlagChange();
});
$('#cn-link').click(() => {
  window.localStorage.setItem('language', 'cn');
  handleFlagChange();
});

window.localStorage.setItem('language', 'cn');
handleTranslate();
changeToCN();

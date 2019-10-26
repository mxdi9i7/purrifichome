import cnTranslation from './cn.js';

const handleTranslate = () => {
  const lang = window.localStorage.getItem('language');
  switch (lang) {
    case 'cn':
      translateToChinese();
      break;
    case 'en':
      translateToEnglish();
    default:
      break;
  }
};

const translateToChinese = () => {
  console.log('hi');
  const items = document.getElementsByTagName('*');
  for (let i = 0; i < items.length; i++) {
    const elem = items[i];
    const data = elem.getAttribute('translate');
    if (data) {
      elem.innerText = cnTranslation[data];
    }
  }
};
const translateToEnglish = () => {
  window.location.reload();
};

export default handleTranslate;

import getLanguages from '../../../api/langData';
import renderToDOM from '../../helpers/renderToDom';

const selectLanguage = (uid, obj) => {
  let langStr = '<option value="">Select a Language</option>';
  getLanguages(uid).then((langArray) => {
    langArray.forEach((lang) => {
      langStr += `<option value="${lang.title}" ${
        lang.title === obj.lang ? 'selected' : ''
      }>${lang.language}</option>`;
    });
    renderToDOM('#language', langStr);
  });
};
export default selectLanguage;

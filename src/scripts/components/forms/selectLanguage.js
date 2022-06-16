import { getLanguages } from '../../../api/langData';
import renderToDOM from '../../helpers/renderToDom';

const selectLanguage = (uid, obj) => {
  let langStr = `<label for="author">Select a Language</label>
    <select class="form-control" id="selectLang" required>
    <option value="">Select a Language</option>`;

  getLanguages(uid, obj).then((langArray) => {
    langArray.forEach((language) => {
      langStr += `<option value="${language.name}" ${
        obj === language.name ? 'selected' : ''
      }>${language.name}</option>`;
    });
    langStr += '</select>';
    renderToDOM('#language', langStr);
  });
};
export default selectLanguage;

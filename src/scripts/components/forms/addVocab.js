import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';
import selectLanguage from './selectLanguage';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const domString = ` <form id=${
    obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'
  }>
      <div class="mb-3">
      <label for="" class="form-label">Title</label>
      <input type="text" id="title" class="form-control" placeholder="Enter a word or phrase" value="${
  obj.title || ''
}"required>
      </div>
      <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Definition</label>
      <input type="text" id="definition" class="form-control" placeholder="Enter a definition or description" value="${
  obj.definition || ''
}"required>
      </div>
      <div class="form-group" id="language">
      </div>
      <div id="submit-btn">
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
  selectLanguage(uid, `${obj.language || ''}`);
};
export default addVocabForm;

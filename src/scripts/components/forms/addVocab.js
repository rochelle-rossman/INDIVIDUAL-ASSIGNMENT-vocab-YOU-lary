import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addVocabForm = () => {
  clearDom();
  const domString = ` <form>
      <div class="mb-3">
      <label for="" class="form-label">Title</label>
      <input type="text" id="title" class="form-control" placeholder="Enter a word or phrase">
      </div>
      <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Definition</label>
      <input type="text" id="definition" class="form-control" placeholder="Enter a definition">
      </div>
      <div class="form-floating">
        <select class="form-select" id="language">
        <option selected>Open this select menu</option>
        <option value="javascript">Javascript</option>
        <option value="html-css">HTML/CSS</option>
        <option value="python">Python</option>
        </select>
        <label for="floatingSelect">Language/Tech</label>
      </div>
      <div id="submit-btn">
      <button type="submit" class="btn btn-primary" id="submit">Submit</button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
};
export default addVocabForm;

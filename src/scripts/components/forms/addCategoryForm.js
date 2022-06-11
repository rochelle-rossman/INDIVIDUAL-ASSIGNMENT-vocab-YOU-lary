import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addCategoryForm = () => {
  clearDom();
  const content = `<form id="add-category">
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">New Category</label>
    <input id="newCategory" type="text" class="form-control" placeholder="Enter a Programming Language" value="" required>
    <input class="edit-submit btn btn-primary" type="submit" value="Submit">
    <input id="cancel-add-category" class="cancel btn btn-primary" type="reset" value="Cancel">
    </div>
  </form>`;
  renderToDOM('#form-container', content);
};

export default addCategoryForm;

import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No vocabulary words have been added</h1>';
  renderToDOM('#cards', domString);
};

const showVocabCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add--btn">Add A Vocabulary Word</button>';

  renderToDOM('#add-button', btnString);

  if (array.length) {
    let domString = '';
    array.forEach((word) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${word.title}</h5>
        <p class="card-text">${word.definition}</p>
        <p class="card-text">${word.language}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
    });
    renderToDOM('#cards', domString);
  } else {
    emptyVocab();
  }
};

export { emptyVocab, showVocabCards };

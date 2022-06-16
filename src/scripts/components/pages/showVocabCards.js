import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No vocabulary words have been added</h1>';
  renderToDOM('#cards', domString);
};

const showVocabCards = (array) => {
  clearDom();

  if (array.length) {
    let domString = '';
    array.forEach((word) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">${word.title}</h3>
        <p class="card-text"><b>Definition:</b> ${word.definition}</p>
        <p class="card-text"><b>Language/Tech:</b> ${word.language}</p>
        <p>${word.timeSubmitted}</p>
        <i class="btn btn-outline-success fas fa-eye" id="view-word--${word.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-outline-warning" id="edit-word--${word.firebaseKey}"></i>
        <i class="btn btn-outline-danger fas fa-trash-alt" id="delete-word-btn--${word.firebaseKey}"></i>
      </div>
    </div>`;
    });
    renderToDOM('#cards', domString);
  } else {
    emptyVocab();
  }
};

export { emptyVocab, showVocabCards };

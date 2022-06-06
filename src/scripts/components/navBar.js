import renderToDOM from '../helpers/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div id="logout-button"></div>
        </div>
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;

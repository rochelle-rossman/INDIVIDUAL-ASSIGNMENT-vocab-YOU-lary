import renderToDOM from '../helpers/renderToDom';
import logo from './images/logo.png';

const navBar = () => {
  const domString = ` <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
      <img src=${logo} id="logo">
        <a class="navbar-brand" href="#" id="home">Vocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Add an entry
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#" id="add-word">Add new word</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" id="add-cat">Add new language</a></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sort Entries
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#" id="sortAlpha">A-Z</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" id="sortNew">Newest-Oldest</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search" id="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search">
          </form>
          <div id="logout-button"></div>
        </div>
      </div>
    </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;

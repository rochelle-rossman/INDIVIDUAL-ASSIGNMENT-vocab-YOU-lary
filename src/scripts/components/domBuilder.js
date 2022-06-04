import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="filter-buttons"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="cards"></div>
    <div id="view"></div>
  </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;

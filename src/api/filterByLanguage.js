import renderToDOM from '../scripts/helpers/renderToDom';
import { getLanguages } from './langData';

const filterButtons = (uid) => {
  getLanguages(uid).then((categoryArray) => {
    if (categoryArray.length) {
      let domString = '';
      categoryArray.forEach((category) => {
        domString += `
      <li><a class="dropdown-item" href="#" id="filter-language--${category.name}">${category.name}</a></li>
          `;
        renderToDOM('#filter', domString);
      });
    }
  });
};

export default filterButtons;

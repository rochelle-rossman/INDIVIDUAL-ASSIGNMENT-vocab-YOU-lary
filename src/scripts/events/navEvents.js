import { getWords } from '../../api/vocabData';
import { emptyVocab, showVocabCards } from '../components/pages/showVocabCards';
import addVocabForm from '../components/forms/addVocab';
import clearDom from '../helpers/clearDom';
import addCategoryForm from '../components/forms/addCategoryForm';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('home')) {
      getWords(uid).then((wordsArray) => {
        showVocabCards(wordsArray);
      });
    }

    if (e.target.id.includes('add-word')) {
      addVocabForm(uid);
    }

    if (e.target.id.includes('add-cat')) {
      addCategoryForm(uid);
    }

    if (e.target.id.includes('sortAlpha')) {
      getWords(uid).then((wordsArray) => {
        const alphaArr = wordsArray.sort((a, b) => a.title.localeCompare(b.title));
        showVocabCards(alphaArr, uid);
      });
    }

    if (e.target.id.includes('sortNew')) {
      getWords(uid).then((wordsArray) => {
        const timeArr = wordsArray.sort((a, b) => new Date(a.timeSubmitted) - new Date(b.timeSubmitted));
        showVocabCards(timeArr, uid);
      });
    }

    if (e.target.id.includes('all')) {
      getWords(uid).then((wordsArray) => {
        showVocabCards(wordsArray);
      });
    }

    const languageFilter = (language) => {
      if (e.target.id.includes(`${language}`)) {
        clearDom();
        const langArray = [];
        getWords(uid).then((cardArray) => {
          cardArray.forEach((card) => {
            if (card.language.toLowerCase() === `${language}`) {
              langArray.push(card);
              showVocabCards(langArray);
            }
          });
        });
      }
    };

    languageFilter('javascript');
    languageFilter('python');
    languageFilter('html');
    languageFilter('css');
  });

  document.querySelector('#navigation').addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase();
    getWords(uid).then((wordsArray) => {
      const searchArray = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const word of wordsArray) {
        if (word.title.toLowerCase().includes(searchInput)) {
          searchArray.push(word);
        }
        if (searchArray.length) {
          showVocabCards(searchArray);
        } else {
          emptyVocab();
        }
      }
    });
  });
};

export default navEvents;

import { createVocab } from '../../api/vocabData';
import { showVocabCards } from '../components/pages/vocabCards';

const formEvents = (uid) => {
  document.querySelector('#form-container').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid,

      };
      createVocab(wordObject).then((wordsArray) => {
        showVocabCards(wordsArray);
      });
      console.warn(wordObject);
    }
  });
};

export default formEvents;

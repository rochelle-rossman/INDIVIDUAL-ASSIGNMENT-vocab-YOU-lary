import { createVocab, getWords, updateWord } from '../../api/vocabData';
import { showVocabCards } from '../components/pages/vocabCards';
// import { showVocabCards } from '../components/pages/vocabCards';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-word')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid,
        timeSubmitted: new Date()

      };
      createVocab(wordObject, uid).then((wordsArray) => {
        showVocabCards(wordsArray);
      });
    }

    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const wordObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid,
        timeSubmitted: new Date(),
        firebaseKey
      };
      updateWord(wordObject, uid).then(() => {
        getWords(uid).then((wordsArray) => showVocabCards(wordsArray));
      });
    }
  });
};

export default formEvents;

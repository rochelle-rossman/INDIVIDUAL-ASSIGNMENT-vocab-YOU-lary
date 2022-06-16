import { createLanguage } from '../../api/langData';
import { createVocab, getWords, updateWord } from '../../api/vocabData';
import addVocabForm from '../components/forms/addVocab';
import { showVocabCards } from '../components/pages/showVocabCards';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-word')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#selectLang').value,
        uid,
        timeSubmitted: new Date().toLocaleString()

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
        language: document.querySelector('#selectLang').value,
        uid,
        timeSubmitted: new Date().toLocaleString(),
        firebaseKey
      };
      updateWord(wordObject, uid).then(() => {
        getWords(uid).then((wordsArray) => showVocabCards(wordsArray));
      });
    }

    if (e.target.id.includes('add-category')) {
      const newLanguage = document.querySelector('#newCategory').value;
      const langObj = {
        name: `${newLanguage}`,
        uid
      };
      createLanguage(langObj, uid).then(() => {
        addVocabForm(uid, {});
      });
    }
  });
};

export default formEvents;

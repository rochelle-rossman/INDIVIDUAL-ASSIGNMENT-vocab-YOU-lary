import {
  deleteWord, getSingleWord, getWords
} from '../../api/vocabData';
import addVocabForm from '../components/forms/addVocab';
import viewSingleWord from '../components/pages/viewSingleWord';
import { showVocabCards } from '../components/pages/showVocabCards';
// import clearDom from '../helpers/clearDom';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add--btn')) {
      addVocabForm(uid);
    }

    if (e.target.id.includes('edit-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((wordObject) => addVocabForm(wordObject));
    }

    if (e.target.id.includes('delete-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteWord(firebaseKey).then(() => {
        getWords(uid).then((wordsArray) => {
          showVocabCards(wordsArray);
        });
      });
    }

    if (e.target.id.includes('view-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((wordObject) => viewSingleWord(wordObject));
    }
  });
};

export default domEvents;

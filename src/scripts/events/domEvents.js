import { deleteWord, getSingleWord, getWords } from '../../api/vocabData';
import addVocabForm from '../components/forms/addVocab';
import { showVocabCards } from '../components/pages/vocabCards';

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

    if (e.target.id.includes('all')) {
      getWords(uid).then((wordsArray) => {
        showVocabCards(wordsArray);
      });
      // } else if (e.target.id) {
      //   const lang = words.filter(
      //     (taco) => taco.language.toLowerCase()
      //   )
      // }
    }
  });
};

export default domEvents;

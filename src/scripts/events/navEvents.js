import { getWords } from '../../api/vocabData';
import { showVocabCards } from '../components/pages/showVocabCards';
import addVocabForm from '../components/forms/addVocab';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('logo')) {
      getWords(uid).then((wordsArray) => {
        showVocabCards(wordsArray);
      });
    }

    if (e.target.id.includes('add--word')) {
      addVocabForm(uid);
    }
  });
};

export default navEvents;

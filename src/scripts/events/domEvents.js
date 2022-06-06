import addVocabForm from '../components/forms/addVocab';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add--btn')) {
      addVocabForm(uid);
    }
  });
};

export default domEvents;

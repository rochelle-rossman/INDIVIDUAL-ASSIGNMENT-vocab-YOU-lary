import { getWords } from '../../../api/vocabData';
import logoutButton from '../../components/buttons/logoutButton';
import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navBar';
import { showVocabCards } from '../../components/pages/vocabCards';
import domEvents from '../../events/domEvents';
import formEvents from '../../events/formEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  logoutButton();

  getWords(user.uid).then((wordsArray) => showVocabCards(wordsArray));
};

export default startApp;

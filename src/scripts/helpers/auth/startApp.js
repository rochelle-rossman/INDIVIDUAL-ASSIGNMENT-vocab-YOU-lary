import { getWords } from '../../../api/vocabData';
import logoutButton from '../../components/buttons/logoutButton';
import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navBar';
import { showVocabCards } from '../../components/pages/showVocabCards';
import domEvents from '../../events/domEvents';
import formEvents from '../../events/formEvents';
import navEvents from '../../events/navEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  navEvents(user.uid);
  logoutButton();

  getWords(user.uid).then((wordsArray) => showVocabCards(wordsArray));
};

export default startApp;

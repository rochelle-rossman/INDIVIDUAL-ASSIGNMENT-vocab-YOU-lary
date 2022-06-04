import getWords from '../../../api/vocabData';
import logoutButton from '../../components/buttons/logoutButton';
import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navBar';
import { showVocabCards } from '../../components/pages/vocabCards';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();

  getWords().then((wordsArray) => showVocabCards(wordsArray));
};

export default startApp;

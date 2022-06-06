import axios from 'axios';
import { showVocabCards } from '../scripts/components/pages/vocabCards';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWords = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/words.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createVocab = (wordObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, wordObject).then((response) => {
    const payload = { firebaseKey: response.data.name };
    axios.patch(`${dbUrl}/words/${response.data.name}.json`, payload)
      .then(() => {
        showVocabCards().then((wordsArray) => resolve(wordsArray));
      });
  }).catch((error) => reject(error));
});

export { getWords, createVocab };

import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWords = (uid) => new Promise((resolve, reject) => {
  axios
    .get(
      `${dbUrl}/words.json?orderBy="uid"&equalTo="${uid}"`
    )
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createVocab = (wordObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, wordObject).then((response) => {
    const payload = { firebaseKey: response.data.name };
    axios.patch(`${dbUrl}/words/${response.data.name}.json`, payload)
      .then(() => {
        getWords(uid).then((wordsArray) => resolve(wordsArray));
      });
  }).catch((error) => reject(error));
});

const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/words/${firebaseKey}.json`)
    .then(() => {
      getWords().then((wordsArray) => resolve(wordsArray));
    })
    .catch((error) => reject(error));
});

const updateWord = (wordObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/words/${wordObject.firebaseKey}.json`, wordObject)
    .then(() => getWords(wordObject)).then(resolve)
    .catch(reject);
});

export {
  getWords, createVocab, updateWord, getSingleWord, deleteWord
};

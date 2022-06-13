import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getLanguages = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/languages.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createLanguage = (langObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/languages.json`, langObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/languages/${response.data.name}.json`, payload)
        .then(() => {
          getLanguages(uid).then((langArray) => resolve(langArray));
        });
    }).catch((error) => reject(error));
});

export { getLanguages, createLanguage };

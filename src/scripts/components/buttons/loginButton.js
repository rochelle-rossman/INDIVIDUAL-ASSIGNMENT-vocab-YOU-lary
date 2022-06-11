import signIn from '../../helpers/auth/signIn';
import renderToDOM from '../../helpers/renderToDom';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1>Welcome to Vocab-YOU-lary!</h1><button id="google-auth" class="btn btn-outline-danger">LOG IN WITH GOOGLE</button>';
  renderToDOM('#app', domString);
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;

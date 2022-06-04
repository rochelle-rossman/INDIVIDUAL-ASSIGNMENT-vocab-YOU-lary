import signIn from '../../helpers/auth/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1>Welcome to Vocab-YOU-lary!</h1><button id="google-auth" class="btn btn-danger">LOG IN WITH GOOGLE</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;

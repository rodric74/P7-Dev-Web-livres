const API_URL = 'https://rodric74.alwaysdata.net/api';

export const API_ROUTES = {
  SIGN_UP: `${API_URL}/auth/signup`,
  SIGN_IN: `${API_URL}/auth/login`,
  BOOKS: `${API_URL}/books`,
  BEST_RATED: `${API_URL}/books/bestrating`,
};

export const APP_ROUTES = {
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  ADD_BOOK: '/Ajouter',
  BOOK: '/livre/:id',
  UPDATE_BOOK: 'livre/modifier/:id',
};

import { Session } from '../interfaces/session';

/**
 * Method static for set and get Token
 *
 * @export
 * @class SessionToken
 */
export class SessionToken {
  static setToken(token: Session) {
    const addToken = JSON.stringify(token);
    localStorage.setItem('session', addToken);
  }

  static getToken(): Session {
    return JSON.parse(localStorage.getItem('session') || '{}');
  }

  static deleteToken() {
    localStorage.removeItem('session');
  }
}

/**
 * Authentication service
 */

import Api from '@/services/Api'

export default {
  /**
   *Register method for users
   * @param {Credentials} credentials Usercredentials: { email: '', password: '' }
   */
  register (credentials) {
    console.log('im here')
    return Api().post('register', credentials)
  }
}

import Api from '@/services/Api'

export default {
  register (credentials) {
    console.log('im here')
    return Api().post('register', credentials)
  }
}

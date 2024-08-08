import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref(),
    router = useRouter()

  async function register({ name, password }) {
    console.log(name, password)
    return new Promise((res, rej) => {
      try {
        let body = {},
          prevUsersRecords = JSON.parse(localStorage.getItem('users'))
        if (prevUsersRecords) body = prevUsersRecords
        body[name] = password
        // TODO here will be an API call
        console.log(body);
        localStorage.setItem('users', JSON.stringify(body))
        currentUser.value = name;
        router.push('/')
        return res(true)
      } catch (e) {
        return rej(e)
      }
    })
  }

  async function login({ name, password }) {
    return new Promise((res, rej) => {
      try {
        // TODO here will be an API call
        let users = JSON.parse(localStorage.getItem('users'))
        if (!users) throw 'No users are here'

        if (users[name] == password) {
          currentUser.value = users[name];
          router.push('/')
          return res(true);
        }
        else if (users.hasOwnProperty(name)) throw 'Wrong password'
        else throw 'User not found'
      } catch (e) {
        return rej(e)
      }
    })
  }

  async function logout() {
    return new Promise(res => {
      currentUser.value = null;
      useRouter().push('/auth')
      return res(true);
    })
  }

  return { currentUser, register, login, logout }
})

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref(),
    timing = 1000

  function getCurrentUser() {
    let res = JSON.parse(localStorage.getItem('currentUser'))

    if (!res) return;

    currentUser.value = res;
    return res;
  }

  async function register({ name, password }) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        try {
          let body = {},
            prevUsersRecords = JSON.parse(localStorage.getItem('users'))
          if (prevUsersRecords) body = prevUsersRecords
          body[name] = password
          // TODO here will be an API call
          localStorage.setItem('users', JSON.stringify(body))
          currentUser.value = name;
          setCurrentUser(name);
          res(true)
        } catch (e) {
          rej(e)
        }
      }, timing)
    })
  }

  function setCurrentUser(name) {
    localStorage.setItem('currentUser', JSON.stringify({
      name,
      logoutTime: +new Date() + 1000 * 60 * 60
    }))
  }

  async function login({ name, password }) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        try {
          // TODO here will be an API call
          let users = JSON.parse(localStorage.getItem('users'))
          if (!users) throw 'No users are here'

          if (users[name] == password) {
            currentUser.value = users[name];
            setCurrentUser(name);
            res(true)
          }
          else if (users.hasOwnProperty(name)) throw 'Wrong password'
          else throw 'User not found'
        } catch (e) {
          rej(e)
        }
      }, timing)
    })
  }

  async function logout() {
    return new Promise(res => {
      setTimeout(() => {
        currentUser.value = null;
        localStorage.removeItem('currentUser')
        res(true)
      }, timing)
    })
  }

  return { currentUser, getCurrentUser, register, login, logout }
})

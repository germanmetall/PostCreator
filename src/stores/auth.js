import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref(),
    timing = 3000

  function getCurrentUser() {
    let res = JSON.parse(localStorage.getItem('currentUser'))
    
    if(!res) return;

    currentUser.value = res;
    return res;
  }

  async function register({ name, password }) {
    return new Promise((res, rej) => {
      try {
        let body = {},
          prevUsersRecords = JSON.parse(localStorage.getItem('users'))
        if (prevUsersRecords) body = prevUsersRecords
        body[name] = password
        // TODO here will be an API call
        localStorage.setItem('users', JSON.stringify(body))
        currentUser.value = name;
        localStorage.setItem('currentUser', JSON.stringify({
          name,
          logoutTime: +new Date() + 1000 * 60 * 10
        }))
        setTimeout(() => res(true), timing)
      } catch (e) {
        setTimeout(() => rej(e), timing)
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
          localStorage.setItem('currentUser', JSON.stringify({
            name,
            logoutTime: +new Date() + 1000 * 60 * 10
          }))
          setTimeout(() => res(true), timing)
        }
        else if (users.hasOwnProperty(name)) throw 'Wrong password'
        else throw 'User not found'
      } catch (e) {
        setTimeout(() => rej(e), timing)
      }
    })
  }

  async function logout() {
    return new Promise(res => {
      currentUser.value = null;
      localStorage.removeItem('currentUser')
      setTimeout(() => res(true), timing)
    })
  }

  return { currentUser, getCurrentUser, register, login, logout }
})

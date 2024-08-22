import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import Instagram from '@/components/icons/instagram.vue'
import Facebook from '@/components/icons/facebook.vue'
import Linkedin from '@/components/icons/linkedin.vue'
import Twitter from '@/components/icons/twitter.vue'
import Telegram from '@/components/icons/telegram.vue'
import { useToast } from 'vue-toast-notification'

export const useSettingsStore = defineStore('settings', () => {
  const optionsToConnect = ref([
    {
      type: 'instagram',
      icon: shallowRef(Instagram),
      connected: false
    },
    {
      type: 'facebook',
      icon: shallowRef(Facebook),
      connected: false
    },
    {
      type: 'linkedin',
      icon: shallowRef(Linkedin),
      connected: false
    },
    {
      type: 'twitter',
      icon: shallowRef(Twitter),
      connected: false
    },
    {
      type: 'telegram',
      icon: shallowRef(Telegram),
      connected: false
    }
  ])

  function getConnectedSocials() {
    let json = JSON.parse(localStorage.getItem('connectedSocials'))
    if (json?.length > 0) json.map(json_item => {
      for (let i = 0; i < optionsToConnect.value.length; i++) {
        if (optionsToConnect.value[i].type == json_item) {
          optionsToConnect.value[i].connected = true;
          break;
        }
      }
    })
  }

  /**
   * @param {string} type 'instagram', 'facebook', 'linkedin', 'twitter' 
   */
  async function toggleSocial(type) {
    if (!type) return
    type = type.toLowerCase()
    if (optionsToConnect.value.find(el => el.type == type).connected) useToast().open({ type: 'success', message: `[MOCK] ${type} disconnected!` })
    else useToast().open({ type: 'success', message: `[MOCK] ${type} connected!` })

    try {
      if (type == 'instagram') { }
      else if (type == 'facebook') { }
      else if (type == 'linkedin') { }
      else if (type == 'twitter') { }

      for (let i = 0; i < optionsToConnect.value.length; i++) {
        if (optionsToConnect.value[i].type == type) {
          optionsToConnect.value[i].connected = !optionsToConnect.value[i].connected;
          localStorage.setItem('connectedSocials', JSON.stringify(optionsToConnect.value.filter(el => el.connected == true).map(el => el.type)));
          break;
        }
      }
    }
    catch (err) {
      return console.error(err)
    }
  }

  return { optionsToConnect, getConnectedSocials, toggleSocial }
})

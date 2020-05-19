import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import tartget from '@/pages/login.vue'

const localVue = createLocalVue()

Vue.use(Vuetify)
localVue.use(Vuetify)

describe('login', () => {
  test('is a Vue instance', () => {
    const vuetify = new Vuetify()
    const wrapper = mount(tartget, {
      localVue,
      vuetify,
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})

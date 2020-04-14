import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import tartget from '@/pages/index.vue'

const localVue = createLocalVue()

Vue.use(Vuetify)
localVue.use(Vuex)
localVue.use(Vuetify)

describe('index', () => {
  let actions
  let getters
  let store
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
    actions = {
      bindMessages: jest.fn(),
    }
    getters = {
      messages: jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions,
    })
  })

  test('is a Vue instance', () => {
    const wrapper = mount(tartget, {
      localVue,
      store,
      vuetify,
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
    expect(actions.bindMessages).toHaveBeenCalled()
    expect(getters.messages).toHaveBeenCalled()
  })
})

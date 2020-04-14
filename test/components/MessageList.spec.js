import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import tartget from '@/components/MessageList.vue'

const localVue = createLocalVue()

Vue.use(Vuetify)
localVue.use(Vuex)
localVue.use(Vuetify)

describe('MessageList', () => {
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
      messages: () => {
        return [{ text: 'dummy1' }, { text: 'dummy2' }, { text: 'dummy3' }]
      },
    }
    store = new Vuex.Store({
      state: {},
      getters,
      actions,
    })
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(tartget, {
      localVue,
      store,
      vuetify,
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
    expect(actions.bindMessages).toHaveBeenCalled()
  })
})

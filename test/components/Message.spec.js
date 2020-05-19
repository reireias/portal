import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import tartget from '@/components/Message.vue'

const localVue = createLocalVue()

Vue.use(Vuetify)
localVue.use(Vuex)
localVue.use(Vuetify)

describe('Message', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(tartget, {
      propsData: {
        message: {
          text: 'text',
          client: 'client',
          createdAt: {
            toDate: () => {
              return new Date('2020/01/01')
            },
          },
        },
      },
      localVue,
      vuetify,
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})

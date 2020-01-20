import { mount } from '@vue/test-utils'
import tartget from '@/pages/index.vue'

describe('index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(tartget)
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

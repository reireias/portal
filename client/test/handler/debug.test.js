const debugHandler = require('@/handler/debug')

jest.mock('consola')

describe('debug', () => {
  test('consola.info() called', () => {
    debugHandler({})
    expect(require('consola').info.mock.calls.length).toBe(2)
  })
})

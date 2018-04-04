const titlecase = require('../titlecase')

test('does basic titlecasing', () => {
  expect(titlecase('hello world')).toBe('Hello World')
})

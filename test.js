var test = require('tape')
var words = require('.')

test('words', function(t) {
  t.ok(Array.isArray(words), 'should be an array')

  t.ok(words.length > 636000, 'should be more than 636k words')

  t.ok(
    words.every(d => typeof d === 'string'),
    'should be all strings'
  )

  t.ok(
    words.every(d => d === d.toLowerCase()),
    'should be all lowercase'
  )

  t.ok(
    words.every(d => d.length !== 0),
    'should not be empty'
  )

  t.ok(words.includes('palabras'), 'should include words')

  t.end()
})

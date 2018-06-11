const test = require('ava')
const path = require('path')

const rootPath = path.join(__dirname, '..')
const testDir = 'test'

// TODO: Write tests here
test('Sample test with ava', (t) => new Promise((resolve, reject) => {
  const msg = `TODO: Write tests! (Store your test files in: ${rootPath}/${testDir})`
  console.info(msg)
  if (msg) return resolve(msg)
  reject(new Error('rejected'))
}).then((msg) => { t.pass(msg) }, (err) => { t.fail(err.message) }))

const mocha = require('mocha')
const request = require('supertest')
const describe = mocha.describe
const it = mocha.it
const beforeEach = mocha.beforeEach
const afterEach = mocha.afterEach

describe('server.js', function () {
  var server

  beforeEach(function () {
    server = require('../dist/server.js')
  })

  afterEach(function () {
    server.close()
  })

  it('responds to /', function testSlash (done) {
    request(server)
      .get('/')
      .expect(200, function (res, req) {
        console.log(res)
      })
  })
})

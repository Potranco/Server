var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var chai = require('chai')
var expect = chai.expect

describe('Test 1', function () {
  it('Is true = true', function () {
    expect(true).to.equal(true)
  })
})

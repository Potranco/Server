const mocha = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../dist/server.js')

let describe = mocha.describe
let it = mocha.it
let expect = chai.expect
chai.use(chaiHttp)
let urlServer = 'http://localhost:3000'

describe('Server in http://localhost:3000', function () {
  describe('Gets', function () {
    it('responds to /', function (done) {
      chai.request(urlServer)
        .get('/')
        .end(function (e, res) {
          expect(res.status).to.equal(200)
          done()
        })
    })
    describe('/user', function () {
      it('responds to /user', function (done) {
        chai.request(urlServer)
          .get('/user')
          .end(function (e, res) {
            expect(res.status).to.equal(200)
            done()
          })
      })
    })

    describe('/character', function () {
      it('responds to /character', function (done) {
        chai.request(urlServer)
          .get('/character')
          .end(function (e, res) {
            expect(res.status).to.equal(200)
            done()
          })
      })
    })
  })
})

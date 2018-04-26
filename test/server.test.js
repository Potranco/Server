const mocha = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const config = require('../dist/configServer.js')

let describe = mocha.describe
let it = mocha.it
let expect = chai.expect
chai.use(chaiHttp)
let urlServer = config.paths.host

describe('Server in ' + urlServer, function () {
  describe('Gets', function () {
    it('responds to /', function (done) {
      chai.request(urlServer)
        .get('/')
        .end(function (e, res) {
          expect(res.status).to.equal(200)
          done()
        })
    })

    describe('/api', function () {
      /* TODO: continue test API user put & post */
      it('responds to /api/user', function (done) {
        let urlUserApi = config.paths.userApi
        chai.request(urlServer)
          .get(urlUserApi)
          .end(function (e, res) {
            expect(res.status).to.equal(200)
            done()
          })
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

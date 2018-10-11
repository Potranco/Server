class Config {
  constructor () {
    this.host = 'mongodb://localhost'
    this.port = '27017'
    this.dbName = 'projectd20'
  }

  url () {
    return this.host + ':' + this.port + '/' + this.dbName
  }
}

export default new Config()

import express from 'express'
const app = express()
const port = 3000
const router = express.Router()

app.use('/assets', express.static('dist'))
app.get('/', function (req, res) {
  let componente = 'server code'
  const html = `
    <html>
    <head>
      <title>Server</title>
    </head>
    <body>
      <h1>hola mundo</h1>
      <div id="serverside">
        ${componente}
      </div>
      <div id="app">Code client</div>
      <script src="/assets/app.js"></script>
    </body>
    </html>
  `
  res.send(html)
})

router.get('/', function (req, res, next) {
  res.send('peticion con router.get')
  next()
})

router.get('/about', function (req, res, next) {
  res.send('Peticon /about con router.get')
})

app.use('/', router)

app.listen(port, function () {
  console.log('Example server app listening on port 3000!')
  console.log('http://localhost:3000')
  console.log('CTRL-C to exit!')
})
